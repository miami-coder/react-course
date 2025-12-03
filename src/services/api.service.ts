import type {IUser} from "../models/IUser.ts";


const getUsers = async ():Promise<IUser[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json());
}

export {
    getUsers,
}