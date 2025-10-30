import { User } from 'entities/User';

export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}

export interface ArticelBlcokBase {
    id:string
    type:ArticleBlockType
}
export enum ArticleView {
    BIG_PLATE = 'BIG_PLATE',
    SMALL_PLATE = 'SMALL_PLATE',
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
