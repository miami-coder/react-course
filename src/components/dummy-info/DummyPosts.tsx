import {useEffect, useState} from "react";
import type {IDPModels} from "../../models/IDPModels.ts";
import {userService} from "../../services/api.service.ts";
import DummyPost from "../dummy-info-item/DummyPost.tsx";

export const DummyPosts = () => {
    const [post, setPost] = useState<IDPModels[]>([])

    useEffect(() => {
        userService.getPostDummy().then((allPost) => {
            setPost(allPost);
        })
    }, []);
    return (
        <>
            {
                post.map((post) => <DummyPost key={post.id} item={post}/>)
            }
        </>
    );
};