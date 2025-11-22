import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StateProvider';

export const getScrollSavePath = (state:StateSchema) => state.scrollSave.scroll;
export const getScrollSaveByPath = createSelector(
    getScrollSavePath,
    (state:StateSchema, path:string) => path,
    (scroll, path) => scroll[path] || 0,
);
