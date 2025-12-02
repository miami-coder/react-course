import type {FC} from "react";
import type {IModels} from "../models/IModels.ts";

type PropsType = {
    course: IModels;
}

export const ArrayComponent: FC<PropsType> = ({course}) => {
    return (
        <li>
            {course.title} {course.monthDuration}
        </li>
    );
};