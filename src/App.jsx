import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";

const App = () => {
    return (
        <>
            <Header/>

            <Outlet />
        </>

    )
}

export default App;