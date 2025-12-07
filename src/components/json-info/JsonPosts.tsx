import {useEffect, useState} from "react";
import type {IJPModels} from "../../models/IJPModels.ts";
import {userService} from "../../services/api.service.ts";
import {JsonPost} from "../json-info-item/JsonPost.tsx";

export const JsonPosts = () => {
    const [postJ, setPostJ] = useState<IJPModels[]>([]);
    useEffect(() => {
        userService.getPostJson().then((allPosts) => {
            setPostJ(allPosts);
        })
    }, []);
    return (
        <div>
            {
                postJ.map((post) => <JsonPost key={post.id} item={post}/>)
            }
        </div>
    );
};