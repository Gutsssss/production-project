import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArtcileSortField, ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types/SortOrder';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?:boolean;
    error?:string;
    view?:ArticleView;
    page:number;
    limit?:number;
    hasMore:boolean;
    // filters
    order: SortOrder;
    sort:ArtcileSortField;
    search:string;
    type:ArticleType;
    _inited?:boolean;
}
