import {FC} from 'react';

import * as style from "./Sidebar.module.css"
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from "src/utils/routes";

const Sidebar: FC = () => {
    return (
        <div className={style["sidebar"]}>
            <title className={style["title"]}>CATEGORIES</title>
            <nav>
                <ul className={style["menu"]}>
                    <li>
                        <NavLink to={ROUTES.CATEGORY + "1"}>
                            List of categories
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