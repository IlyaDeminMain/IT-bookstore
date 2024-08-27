import { Route, Routes} from "react-router-dom";
import Home from "src/components/home/Home";
import {ROUTES} from "src/utils/routes";

const AppRoutes = () => (
    <Routes>
        <Route path={`${ROUTES.MONGODB}/:id`} element={<h1>ID</h1>} />
        <Route path={`${ROUTES.NEW}/:id`} element={<div>ID</div>}/>
        <Route path={ROUTES.MONGODB} element={<h4>NOT ID</h4>} />
        <Route path={ROUTES.NEW} element={<h4>NOT ID</h4>}/>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path="*" element={<div />} />
    </Routes>
);

export default AppRoutes;