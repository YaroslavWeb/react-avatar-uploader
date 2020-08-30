export interface IStore {
  avatarReducer: IStateAvatar;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IStateAvatar {
  avatar: string;
  progressUpload: number;
}

export interface IAlert {
  text: string;
  type: "primary" | "success" | "danger" | "warning" ;
}
