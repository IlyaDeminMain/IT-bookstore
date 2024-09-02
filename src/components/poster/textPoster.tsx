import ReactHard from "src/assets/react-heart.svg"
import Mongo from "src/assets/mongo.svg"
import New from "src/assets/new.svg"
export const mainPoster = {
    head: "Welcome to us dear user!",
    subtitle: "The library offers a selection of scientific books and magazines.\n" +
        "                    Fields of knowledge represented: various natural sciences (archaeology, astronomy, paleontology,\n" +
        "                    physics, etc.), mathematics, technology, humanities (history, psychology, sociology), society. There\n" +
        "                    is a selection of encyclopedic publications.",
    img: <ReactHard viewBox={"0 0 600 600"} width={"250px"} height={"250px"} stroke={"url(--js-color)"}/>
}

export const mongoPoster = {
    head: "MongoDB books",
    subtitle: "MongoDB is a document-oriented database management system that does not require a table schema description. Considered one of the classic examples of NoSQL systems, it uses JSON-like documents and a database schema.",
    img: <Mongo viewBox={"0 0 1100 1100"} width={"350px"} height={"250px"} stroke={"url(--js-color)"}/>
}

export const newPoster = {
    head: "Collections of the latest new books!",
    subtitle: "This page features 365 selections of the latest books and audiobooks from top authors. The selections are updated every week, which will allow each reader to find a book to suit their taste. Start reading the latest news directly on the site or install our convenient application so as not to part with your favorite books even without an Internet connection!",
    img: <New viewBox={"0 0 113 113"} width={"350px"} height={"250px"} fill={"black"} stroke={"url(--js-color)"}/>
}



export type PosterType = typeof mainPoster