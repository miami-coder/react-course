import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const Layouts = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layouts;