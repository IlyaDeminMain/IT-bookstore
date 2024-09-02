import {FC} from "react";
import * as style from "./Poster.module.css"
import {PosterType} from "src/components/poster/textPoster";


const Poster: FC<PosterType> = ({head,subtitle,img}) => (
    <section className={style["poster"]}>
        <div className={style["title"]}>EBOOKS</div>
        <div className={style["product"]}>
            <div className={style["text"]}>
                <h1 className={style["head"]}>{head}</h1>
                <div className={style["subtitle"]}>{subtitle}</div>
            </div>
            <div className={style["image"]}>
                {img}
            </div>
        </div>
    </section>
)

export default Poster;