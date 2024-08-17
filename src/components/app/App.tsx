import {FC} from "react";
import 'src/styles/index.css'
import AppRoutes from "src/components/routes/Routes";
import Header from "src/components/header/Header";
import Sidebar from "src/components/sidebar/Sidebar";
import Footer from "src/components/footer/Footer";

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