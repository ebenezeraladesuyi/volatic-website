import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";



const ForexLayout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ForexLayout;