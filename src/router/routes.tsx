import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersJPage from "../pages/UsersJPage.tsx";
import UsersDPage from "../pages/UsersDPage.tsx";
import PostsJPage from "../pages/PostsJPage.tsx";
import CommentsJPage from "../pages/CommentsJPage.tsx";
import CommentsDPage from "../pages/CommentsDPage.tsx";
import PostsDPage from "../pages/PostsDPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'users-json', element: <UsersJPage/>},
            {path: 'users-dummy', element: <UsersDPage/>},
            {path: 'posts-json', element: <PostsJPage/>},
            {path: 'post-dummy', element: <PostsDPage/>},
            {path: 'comments-json', element: <CommentsJPage/>},
            {path: 'comments-dummy', element: <CommentsDPage/>}
        ]
    }
])