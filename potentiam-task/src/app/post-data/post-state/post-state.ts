export interface postModel {
    id: number,
    title: string,
    body: string,
    userId:number 
}


export interface PostState {
    Posts: Array<postModel>;
}

export const initializeState = (): PostState => {
    return { Posts: Array<postModel>() };
  };