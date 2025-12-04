import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import Layouts from "../layouts/Layouts.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <Layouts/>, children: [
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "products", element: <ProductsPage/>}
        ]
    }

])