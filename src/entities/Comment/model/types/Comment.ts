import { User } from '@/entities/User';

export interface Comment {
    id:string,
    text:string,
    user:User
}
export interface CommentSchema {
    id:string,
    text:string,
    user:User
}
