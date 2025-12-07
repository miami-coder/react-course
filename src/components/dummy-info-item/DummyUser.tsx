import type {FC} from "react";
import type {IDUModels} from "../../models/IDUModels.ts";

type UserDummyProps = {
    item: IDUModels
}

export const DummyUser:FC<UserDummyProps> = ({item}) => {
    return (
        <div>
            <p>ID: {item.id}</p>
            <p>First name: {item.firstName}</p>
            <p>Last name: {item.lastName}</p>
            <p>Maiden name: {item.maidenName}</p>
            <p>Age: {item.age}</p>
        </div>
    );
};