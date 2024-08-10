import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";



const UnizikLayout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UnizikLayout;