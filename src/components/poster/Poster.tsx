import * as style from "./Poster.module.css"
import ReactHard from "src/assets/react-heart.svg"

const Poster = () => (
    <section className={style["poster"]}>
        <div className={style["title"]}>BOOKS</div>
        <div className={style["product"]}>
            <div className={style["text"]}>
                <div className={style["subtitle"]}>Writing Modular JavaScript With AMD, CommonJS & ES Harmony</div>
                <h1 className={style["head"]}>The Road to React</h1>
                <button className={"button"}>Add Ebook to Cart</button>
            </div>
            <div className={style["image"]}>
                <ReactHard viewBox={"0 0 600 600"} width={"250px"} height={"250px"} stroke={"url(--js-color)"}/>
            </div>
        </div>
    </section>
)

export default Poster;