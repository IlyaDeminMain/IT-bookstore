import {FC, useLayoutEffect, useState} from "react";
import * as style from "./Cart.module.css"
import { Selector } from "src/store/hooks";
import Minus from "src/assets/icons/minus.svg"
import Plus from "src/assets/icons/plus.svg"
import Reset from "src/assets/icons/reset.svg"
import {useLocation} from "react-router-dom";

const Cart: FC = () => {
    const cart = Selector(({cart})=> cart.item)
    const [count, setCount] = useState<number>(0);
    const {pathname} = useLocation()
    if (count < 0) {
        setCount(0)
    }
    useLayoutEffect(()=>{
        setCount(0)
    },[pathname])

    if (cart !== null){
        const cleanedCartStr = cart.price.replace(/[^0-9\.]/g, '')
        const priceNumber = (parseFloat(cleanedCartStr) * count).toFixed(2)

        const Text:FC<{text:string, name:string}> = ({text, name})=> (
            <li className={style["desc"]}>{name}
                <p className={style["category"]}>{`:ㅤ${text}`}</p>
                <br/>
                <br/>
            </li>
        )

        return (
            <section className={style["cart"]}>
                <div className={style["item"]}>
                    <img src={cart.image} className={style["image"]} alt={"image"}/>
                    <div className={style["info"]}>
                        <h3 className={style["name"]}>{cart.title}</h3>
                        <div className={style["category"]}>{cart.authors}</div>
                    </div>

                    <div className={style["price"]}>{cart.price}$</div>

                    <div className={style["quantity"]}>
                        <div
                            className={style["minus"]}
                            onClick={() => {
                                setCount(count - 1)
                            }}
                        >
                            <Minus/>
                        </div>

                        <span>{count}</span>

                        <div
                            className={style["plus"]}
                            onClick={() => {
                                setCount(count + 1)
                            }}
                        >
                            <Plus/>
                        </div>
                    </div>

                    <div className={style["total"]}>{priceNumber}</div>

                    <div
                        className={style["reset"]}
                        onClick={() => {
                            setCount(0)
                        }}
                    >
                        <Reset className="icon"/>
                    </div>
                </div>
                <ul className={style["menu"]}>
                    <Text name={"title"} text={cart.subtitle}/>
                    <Text name={"year"} text={cart.year}/>
                    <Text name={"language"} text={cart.language}/>
                    <Text name={"pages"} text={cart.pages}/>
                    <Text name={"publisher"} text={cart.publisher}/>
                    <Text name={"rating"} text={cart.rating}/>
                    <Text name={"description"} text={cart.desc}/>
                </ul>
            </section>
        )
    }
    return <div/>
};

export default Cart;