import type {FC} from "react";
import type {IJUModels} from "../../models/IJUModels.ts";
import './JsonUser.css'

type UserTypeInfo = {
    item: IJUModels;
}
export const JsonUser: FC<UserTypeInfo> = ({item}) => {
    return (
        <div className='info'>
            <h2>{item.id} {item.name}</h2>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <ul>
                <li>{item.address.street}</li>
                <li>{item.address.suite}</li>
                <li>{item.address.city}</li>
                <li>{item.address.zipcode}</li>
                <li>{item.address.geo.lat}</li>
                <li>{item.address.geo.lng}</li>
            </ul>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.company.name}</p>
            <p>{item.company.catchPhrase}</p>
            <p>{item.company.bs}</p>
        </div>
    );
};