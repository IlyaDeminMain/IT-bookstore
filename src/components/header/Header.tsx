import {FC} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "src/utils/routes";
import Logo from "src/assets/logo.svg"
import Search from "src/assets/sprite/search.svg";
import * as style from "./Header.module.css"

const Header: FC = () => {
    return (
        <div className={style["header"]}>
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
                           onChange={()=>{}}
                           value={""}
                    />
                </div>
            </form>
        </div>
    );
};

export default Header;