import type {FC} from "react";
import type {IJUModels} from "../../models/IJUModels.ts";

type UserTypeInfo = {
    item: IJUModels;
}
export const JsonUser:FC<UserTypeInfo> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>{item.address.city}</p>
            <p>{item.address.zipcode}</p>
            <p>{item.address.geo.lat}</p>
            <p>{item.address.geo.lng}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.company.name}</p>
            <p>{item.company.catchPhrase}</p>
            <p>{item.company.bs}</p>
        </div>
    );
};