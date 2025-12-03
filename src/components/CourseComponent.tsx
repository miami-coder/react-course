import type {ICourse} from "../models/ICourses.ts";
import type {FC} from "react";

type MyPropType = {
    item: ICourse;
}

const CourseComponent:FC<MyPropType> = ({item}) => {
    return (
        <div>
            <h3>Title: {item.title}</h3>
            <p>MonthDuration: {item.monthDuration}</p>
            <p>HourDuration: {item.hourDuration}</p>
            <ul>
                {
                    item.modules.map((module, i) => <li key={i}>{module}</li>)
                }
            </ul>
        </div>
    );
};

export default CourseComponent;