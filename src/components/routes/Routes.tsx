import {Route, Routes} from "react-router-dom";
import Home from "src/components/home/Home";
import {ROUTES} from "src/utils/routes";

const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>} />
    </Routes>
);

export default AppRoutes;