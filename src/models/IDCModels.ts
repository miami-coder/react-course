export interface IDCModels {
	id: number;
	postId: number;
	body: string;
	user: userItem;
	likes: number;
}

export interface userItem {
	fullName: string;
	id: number;
	username: string;
}


