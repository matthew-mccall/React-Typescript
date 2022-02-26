import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const Home = React.lazy(() => import('./Home'))
const Page = React.lazy(() => import('./Page'))

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/page" element={
                <React.Suspense fallback={<p>Loading...</p>}>
                    <Page />
                </React.Suspense>
            } />
            <Route path="/" element={
                <React.Suspense fallback={<p>Loading...</p>}>
                    <Home />
                </React.Suspense>
            } />
        </Routes>
    </Router>, document.getElementById("root"));