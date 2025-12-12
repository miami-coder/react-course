import type {FC} from "react";
import type {IDCModels} from "../../models/IDCModels.ts";

type CommPropType = {
    item: IDCModels
}

const DummyComment:FC<CommPropType> = ({item}) => {
    return (
        <div>
            <h2>{item.id}</h2>
            <p>{item.body}</p>
        </div>
    );
};

export default DummyComment;