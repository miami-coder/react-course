import type {FC} from "react";
import type {IJCModels} from "../../models/IJCModels.ts";

type ComPropType = {
    item: IJCModels
}

export const JsonComment:FC<ComPropType> = ({item}) => {
    return (
        <div>
            <p>Post ID {item.postId}</p>
            <p>id: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Body: {item.body}</p>
        </div>
    );
};