import {FC} from "react";
import {Link} from "react-router-dom";
import Logo from "src/assets/logo.svg"
import Search from "src/assets/icons/search.svg";
import Bag from "src/assets/icons/Bag.svg";
import Heart from "src/assets/icons/heart.svg";
import * as style from "./Header.module.css"
import {useHookContext} from "src/utils/ContextWrapper";

const Header: FC = () => {
    const {ROUTES} = useHookContext()
    return (
        <header className={style["header"]}>
            <div className={style['logo']}>
                <Link to={ROUTES.HOME}>
                    <Logo width={"50"} height={"50"}/>
                </Link>
            </div>
            <div className={style['info']}>
                <div className={style["user"]}>
                    <div className={style["avatar"]}/>
                    <div className={style["username"]}>Guest</div>
                </div>
            </div>
            <form className={style["form"]}>
                <div className={style["icon"]}>
                    <Search/>
                </div>
                <div className={style["input"]}>
                    <input type={"search"}
                           name={"search"}
                           placeholder={"Search"}
                           autoComplete={"off"}
                           onChange={() => {
                           }}
                           value={""}
                    />
                </div>
                {__ENV__ === "production" && <div className={style["box"]}></div>}
            </form>
            <div className={style["account"]}>
                <Link to={ROUTES.HOME} className={style["favourites"]}>
                    <div className={style["icon-fav"]}>
                        <Heart/>
                    </div>
                </Link>
                <Link to={ROUTES.HOME} className={style["cart"]}>
                    <div className={style["icon-cart"]}>
                        <Bag/>
                    </div>
                    <span className={style["count"]}>3</span>
                </Link>
            </div>
        </header>
    );
};
export default Header;