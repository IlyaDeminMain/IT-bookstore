import * as style from "./Banner.module.css"
import Sale from "src/assets/sale.png"
import {Link} from "react-router-dom";
import {useHookContext} from "src/utils/ContextWrapper";

const Banner = () => {
    const {ROUTES} = useHookContext()

    return (
        <section className={style["banner"]}>
            <div className={style["left"]}>
                <p className={style["content"]}>
                    NEW YEAR
                    <span>SALE</span>
                </p>
                <button className={style["more"]}>
                    <Link to={ROUTES.NEW} className={style["more"]}>See more</Link>
                </button>
                <p className={style["discount"]}>
                    save up to <span>50%</span>
                </p>
            </div>
            <img src={Sale} alt={"bunner"} className={style["right"]} />
        </section>
    )
}

export default Banner