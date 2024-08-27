import {FC, useEffect} from "react";
import 'src/styles/index.css'
import AppRoutes from "src/components/routes/Routes";
import Header from "src/components/header/Header";
import Sidebar from "src/components/sidebar/Sidebar";
import Footer from "src/components/footer/Footer";
import {Dispatch} from "src/store/hooks";
import {getMongodb} from "src/store/mongodb/mongodbThunks";
import {getNew} from "src/store/new/newThunk";
import BookRoutes from "src/components/routes/BookRoutes";

const App: FC = () => {
    const dispatch = Dispatch()

    useEffect(()=>{
        dispatch(getMongodb({timeout: 5000}))
        dispatch(getNew({timeout: 5000}))
    }, [])

    return(
        <div className={"app"}>
            <Header/>
            <div className={"container"}>
                <Sidebar/>
                <AppRoutes/>
            </div>
            <BookRoutes/>
            <Footer/>
        </div>
    )
};

export default App;