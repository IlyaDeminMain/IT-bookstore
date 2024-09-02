import {FC} from "react";
import * as style from "./Footer.module.css"
import {Link} from "react-router-dom";
import Logo from "src/assets/logo.svg"
import Instagram from "src/assets/icons/instagram.svg"
import Facebook from "src/assets/icons/facebook.svg"
import Twitter from "src/assets/icons/twitter.svg"
import Telegram from "src/assets/icons/telegram.svg"
import YouTube from "src/assets/icons/youtube.svg"
import {useHookContext} from "src/utils/ContextWrapper";


const Footer:FC = () => {
    const {ROUTES} = useHookContext()

    return (
        <section className={style["footer"]}>
            <div className={style['logo']}>
                <Link to={ROUTES.HOME}>
                    <Logo width={"30"} height={"30"}/>
                </Link>
            </div>
            <div className={style['rights']}>
                Developed by
                <a
                    href={"https://github.com/IlyaDeminMain"}
                    target={"_blank"}
                    rel={"noreferrer"}>
                    {" Ilya Demin"}
                </a>
            </div>
            <div className={style["socials"]}>
                <a
                    href={"https://www.google.com/"}
                    target={"_blank"}
                    rel={"noreferrer"}>
                    <Instagram/>
                </a>
                <a
                    href={"https://www.google.com/"}
                    target={"_blank"}
                    rel={"noreferrer"}>
                    <Facebook/>
                </a>
                <a
                    href={"https://www.google.com/"}
                    target={"_blank"}
                    rel={"noreferrer"}>
                    <Twitter/>
                </a>
                <a
                    href={"https://www.google.com/"}
                    target={"_blank"}
                    rel={"noreferrer"}>
                    <Telegram/>
                </a>
                <a
                    href={"https://www.google.com/"}
                    target={"_blank"}
                    rel={"noreferrer"}>
                    <YouTube/>
                </a>
            </div>
        </section>
    );
}

export default Footer;