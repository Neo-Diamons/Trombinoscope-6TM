import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login/login";
import Custom404 from "./pages/404";
import Admin from "./pages/Admin";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Custom404 />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}
