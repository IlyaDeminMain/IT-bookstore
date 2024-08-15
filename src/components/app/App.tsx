import {FC} from "react";
import '../../styles1/index.css'
import AppRoutes from "../routes/Routes";

const App: FC = () => {
    return(
        <div className={"app"}>
            <AppRoutes/>
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