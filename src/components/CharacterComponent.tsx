import type {ISimpsons} from "../models/ISimpsons.ts";
import type {ReactNode} from "react";

interface Props {
    item: ISimpsons,
    children: ReactNode
}

export const CharacterComponent = ({item, children}:Props) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <img src={item.photo} alt={item.photo} />
            <p>{children}</p>
        </div>
    );
};