import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function Layout({children}) {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}


export default Layout;