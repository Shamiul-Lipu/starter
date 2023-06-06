import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";



const Main = () => {
    return (
        <>
            <NavBar></NavBar>
            <main className="pt-20">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Main;