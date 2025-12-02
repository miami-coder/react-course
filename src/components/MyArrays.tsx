import {coursesAndDurationArray} from "../data/MyArr.ts";
import type {IModels} from "../models/IModels.ts";
import {ArrayComponent} from "./ArrayComponent.tsx";

export const MyArrays = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course:IModels, index: number) => {
                    return (<ArrayComponent course={course} key={index}/>)
                })
            }
        </ul>
    );
};

export default MyArrays;