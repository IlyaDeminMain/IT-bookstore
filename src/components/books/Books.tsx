
import {FC} from "react";
import {Books} from "src/store/mongodb/mongodbTypes";
import {useLocation, NavLink, NavLinkRenderProps } from "react-router-dom";
import * as style from "src/components/books/Books.module.css"


interface Props {
    title: string,
    books: Books[];
}

const Books:FC<Props> = ({title, books }) => {

    const active = ({isActive}:  NavLinkRenderProps)=> (isActive ? style["active"] : style["product"])
    const location = useLocation();
    const pathBeforeId = location.pathname.split('/').slice(0, 2).join('/');

    function categorie():string {
        return location.pathname.split('/').slice(0, 2).join('')
    }

    return (
        <section className={style["products"]}>
            {title && <h2>{title}</h2>}
            <div className={style["list"]}>{
                books.map(({isbn13 , image, price, subtitle, title})=>{
                    return (
                        <NavLink  key={isbn13} to={{
                            pathname:  `${pathBeforeId}/${isbn13}`
                        }} id={isbn13} className={active} >
                            <img src={image} className={style["image"]}/>
                            <div className={style["wrapper"]}>
                                <h3 className={style["title"]}>{title}</h3>
                                <div className={style["subtitle"]}>{subtitle}</div>
                                <div className={style["info"]}>
                                    <div className={"price"}>{price}</div>
                                    <div className={"prices"}>{categorie()}</div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }</div>
        </section>
    );
};

export default Books;
