import {Route, Routes} from "react-router-dom";
import {ROUTES} from "src/utils/routes";
import {Selector} from "src/store/hooks";
import Books from "src/components/books/Books";

const BookRoutes = () => {
    const mongodb = Selector(({mongodb})=> mongodb.items)
    const newBooks = Selector(({newBooks})=> newBooks.items)
    return (
        <Routes>
            <Route path={`${ROUTES.MONGODB}/:id`} element={<Books title={'MongoDB'} books={newBooks.books} />} />
            <Route path={`${ROUTES.NEW}/:id`} element={<Books title={'New books'} books={mongodb.books} />} />
            <Route path={ROUTES.MONGODB} element={<Books title={'MongoDB'} books={newBooks.books} />} />
            <Route path={ROUTES.NEW} element={<Books  title={'New books'} books={mongodb.books} />} />
            <Route index element={<div/>} />
        </Routes>
    )
};


export default BookRoutes;