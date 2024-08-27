import {FC} from 'react';
import * as style from "./Sidebar.module.css"
import {Link, NavLink, NavLinkRenderProps} from "react-router-dom";
import {ROUTES} from "src/utils/routes";

const Sidebar: FC = () => {
    const active = ({isActive}:  NavLinkRenderProps)=> `${style["link"]} ${isActive ? style["active"] : ""}`
    return (
        <div className={style["sidebar"]}>
            <div className={style["title"]}>CATEGORIES</div>
            <nav>
                <ul className={style["menu"]}>
                    <li>
                        <NavLink className={active} to={ROUTES.NEW}>
                            New books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={active} to={ROUTES.MONGODB}>
                            MongoDB
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={style["footer"]}>
                <Link className={style["link"]} target={"_blank"} to={ROUTES.HELP}>Help</Link>
            </div>
        </div>
    );
};

export default Sidebar;