import { EntityState } from '@reduxjs/toolkit';
import {
    ArtcileSortField, Article, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/SortOrder';

export interface ArticlePageSchema extends EntityState<Article, string> {
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
