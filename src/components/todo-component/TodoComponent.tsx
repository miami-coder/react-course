import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModels.ts";

type PropType = { todo: TodoModel }
export const TodoComponent: FC<PropType> = ({todo: {title, id, userId, completed}}) => {
    return (
        <div>
            {id} {title} {userId} {completed.toString()}
        </div>
    );
};