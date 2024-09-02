import { Route, Routes} from "react-router-dom";
import Poster from "src/components/poster/Poster";
import Cart from "src/components/cart/Cart";
import {mainPoster, mongoPoster, newPoster} from "src/components/poster/textPoster";
import {useHookContext} from "src/utils/ContextWrapper";

const AppRoutes = () => {
        const {ROUTES} = useHookContext()

        return (
            <Routes>
                    <Route path={ROUTES.MONGODB_ID} element={<Cart/>} />
                    <Route path={ROUTES.NEW_ID} element={<Cart/>}/>
                    <Route path={ROUTES.MONGODB} element={<Poster head={mongoPoster.head} subtitle={mongoPoster.subtitle} img={mongoPoster.img} />} />
                    <Route path={ROUTES.NEW} element={<Poster head={newPoster.head} subtitle={newPoster.subtitle} img={newPoster.img} />}/>
                    <Route path={ROUTES.HOME} element={<Poster head={mainPoster.head} subtitle={mainPoster.subtitle} img={mainPoster.img} />}/>
                    <Route path="*" element={<div />} />
            </Routes>
        );
}

export default AppRoutes;