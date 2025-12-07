import {useEffect, useState} from "react";
import type {IJCModels} from "../../models/IJCModels.ts";
import {userService} from "../../services/api.service.ts";
import {JsonComment} from "../json-info-item/JsonComment.tsx";

export const JsonComments = () => {
    const [commJ, setCommJ] = useState<IJCModels[]>([])
    useEffect(() => {
        userService.getCommentsJson().then((allComments) => {
            setCommJ(allComments);
        })
    }, []);
    return (
        <div>
            {
                commJ.map((comment) => <JsonComment key={comment.id} item={comment} />)
            }
        </div>
    );
};