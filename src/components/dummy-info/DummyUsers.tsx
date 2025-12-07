import {useEffect, useState} from "react";
import type {IDUModels} from "../../models/IDUModels.ts";
import {userService} from "../../services/api.service.ts";
import {DummyUser} from "../dummy-info-item/DummyUser.tsx";

export const DummyUsers = () => {
    const [users, setUsersD] = useState<IDUModels[]>([])

    useEffect(() => {
        userService.getUserDummy().then((allUsersD) => {
            setUsersD(allUsersD)
        })
    }, []);
    return (
        <div>
            {
                users.map((user) => <DummyUser key={user.id} item={user}/>)
            }
        </div>
    );
};