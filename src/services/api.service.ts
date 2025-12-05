import type {IJUModels} from "../models/IJUModels.ts";
import {urls} from "../urls/urls.ts";
import type {IDUModels} from "../models/IDUModels.ts";
import type {IJPModels} from "../models/IJPModels.ts";
import type {IDPModels} from "../models/IDPModels.ts";
import type {IJCModels} from "../models/IJCModels.ts";
import type {IDCModels} from "../models/IDCModels.ts";

export const userService = {
    getUsersJson: async (): Promise<IJUModels[]> => {
        return await fetch(urls.users.jsonUsers)
            .then((response) => response.json())
    },
    getUserDummy: async (): Promise<IDUModels[]> => {
        return await fetch(urls.users.dummyUsers)
            .then((response) => response.json())
    },
    getPostJson: async (): Promise<IJPModels[]> => {
        return await fetch(urls.posts.jsonPosts)
            .then((response) => response.json())
    },
    getPostDummy: async (): Promise<IDPModels[]> => {
        return await fetch(urls.posts.dummyPosts)
            .then((response) => response.json())
    },
    getCommentsJson: async (): Promise<IJCModels[]> => {
        return await fetch(urls.comments.jsonComments)
            .then((response) => response.json())
    },
    getCommentsDummy: async (): Promise<IDCModels[]> => {
        return await fetch(urls.comments.dummyComments)
            .then((response) => response.json())
    }
}