import type {FC} from "react";
import type {IDPModels} from "../../models/IDPModels.ts";

type PostTypeProps = {
    item: IDPModels
}

const DummyPost:FC<PostTypeProps> = ({item}) => {
    return (
        <div>
            <h2>{item.id} {item.title}</h2>
            <p>{item.body}</p>
        </div>
    );
};

export default DummyPost;