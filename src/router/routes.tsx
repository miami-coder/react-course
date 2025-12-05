import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersJPage from "../pages/UsersJPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersJPage/>}
        ]
    }
])