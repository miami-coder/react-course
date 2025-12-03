import {coursesArray} from "../data/data.ts";
import CourseComponent from "./CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <div>
            {
                coursesArray.map((course, i) => <CourseComponent key={i} item={course}/>)
            }
        </div>
    );
};

export default CoursesComponent;