import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login/login";
import Custom404 from "./pages/404";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Custom404 />} />
        </Routes>
    );
}
