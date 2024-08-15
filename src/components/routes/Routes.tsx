import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import {ROUTES} from "../../utils/routes";

const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>} />
    </Routes>
);

export default AppRoutes;