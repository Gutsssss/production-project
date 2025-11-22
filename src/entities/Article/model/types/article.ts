import { User } from '@/entities/User';
import { ArticleBlockType } from '../consts/ArticleConsts';

export interface ArticelBlcokBase {
    id:string
    type:ArticleBlockType
}
export interface ArticleTextBlock extends ArticelBlcokBase {
    type:ArticleBlockType.TEXT
    paragraphs:string[]
    title?:string
}
export interface ArticleImageBlock extends ArticelBlcokBase {
    type:ArticleBlockType.IMAGE
    src:string
    title?:string
}
export interface ArticleCodeBlock extends ArticelBlcokBase {
    type:ArticleBlockType.CODE
    code:string
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock
export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    ECONOMYC = 'ECONOMYC',
    MATH = 'MATH'
}

export interface Article {
    id: string,
      title: string,
      subtitle: string,
      user:User
      img: string,
      views: number,
      createdAt: string,
      type: ArticleType[],
      blocks:ArticleBlock[]
}
