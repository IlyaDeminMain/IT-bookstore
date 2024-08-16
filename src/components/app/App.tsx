import {FC} from "react";
import '@/styles/index.css'
import AppRoutes from "../routes/Routes";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const App: FC = () => {

    return(
        <div className={"app"}>
            <Header/>
            <div className={"container"}>
                <Sidebar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    )
};

export default App;



// if (__ENV__ === "production"){
//     return (
//         <h1>PLATFORM={__ENV__}</h1>
//     );
// }
//
// if (__ENV__ === "development"){
//     return (
//         <h1>PLATFORM={__ENV__}</h1>
//     );
// }