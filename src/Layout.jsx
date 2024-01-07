import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function Layout() {
    return (
        <>
            <Header />
            <Outlet /> {/* Dynamic */}
            <Footer />
        </>
    );
}

export default Layout;
