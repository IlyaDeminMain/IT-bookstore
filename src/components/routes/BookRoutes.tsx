import {Route, Routes} from "react-router-dom";
import {Selector} from "src/store/hooks";
import Books from "src/components/books/Books";
import Banner from "src/components/bunner/Bunner";
import {useHookContext} from "src/utils/ContextWrapper";

const BookRoutes = () => {
    const mongodb = Selector(({mongodb})=> mongodb.items)
    const newBooks = Selector(({newBooks})=> newBooks.items)
    const {ROUTES} = useHookContext()

    return (
        <Routes>
            <Route path={ROUTES.MONGODB_ID} element={<Books title={'MongoDB'} books={newBooks.books} />} />
            <Route path={ROUTES.NEW_ID} element={<Books title={'New books'} books={mongodb.books} />} />
            <Route path={ROUTES.MONGODB} element={<Books title={'MongoDB'} books={newBooks.books} />} />
            <Route path={ROUTES.NEW} element={<Books  title={'New books'} books={mongodb.books} />} />
            <Route index element={<Banner/>} />
        </Routes>
    )
};


export default BookRoutes;