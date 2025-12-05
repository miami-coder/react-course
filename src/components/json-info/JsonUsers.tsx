import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import type {IJUModels} from "../../models/IJUModels.ts";
import {JsonUser} from "./JsonUser.tsx";

const JsonUsers = () => {
    const [usersJ, setUsersJ] = useState<IJUModels[]>([]);
    useEffect(() => {
        userService.getUsersJson().then((allJUsers) => {
            setUsersJ(allJUsers);
        })
    }, []);
    return (
        <div>
            {
                usersJ.map(value => <JsonUser key={value.id} item={value}/>)
            }
        </div>
    );
};

export default JsonUsers;