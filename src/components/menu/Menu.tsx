import "./Menu.css"
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users-json'}>users-json</Link></li>
                <li><Link to={'users-dummy'}>users-dummy</Link></li>
                <li><Link to={'posts-json'}>posts-json</Link></li>
                <li><Link to={'post-dummy'}>post-dummy</Link></li>
                <li><Link to={'comments-json'}>comments-json</Link></li>
                <li><Link to={'comments-dummy'}>comments-dummy</Link></li>
            </ul>
        </div>
    );
};

export default Menu;