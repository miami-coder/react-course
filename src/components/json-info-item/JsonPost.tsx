import type {FC} from "react";
import type {IJPModels} from "../../models/IJPModels.ts";

type PostPropType = {
    item: IJPModels
}

export const JsonPost:FC<PostPropType> = ({item}) => {
    return (
        <div>
            <p>Number user {item.userId}</p>
            <p>Number post {item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
        </div>
    );
};