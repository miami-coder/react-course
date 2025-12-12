import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import type {IDCModels} from "../../models/IDCModels.ts";
import DummyComment from "../dummy-info-item/DummyComment.tsx";

export const DummyComments = () => {
    const [comments, setComments] = useState<IDCModels[]>([]);
    useEffect(() => {
        userService.getCommentsDummy().then((allComments) =>
        setComments(allComments));
    }, []);
    return (
        <>
            {
                comments.map((value) => <DummyComment key={value.id} item={value}/>)
            }
        </>
    );
};