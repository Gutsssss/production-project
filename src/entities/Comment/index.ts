export type { Comment } from './model/types/Comment';
export { CommentItem } from './ui/CommentItem/CommentItem';
export { CommentList } from './ui/CommentList/CommentList';
export { addCommentFormReducer } from './model/slice/AddCommentSlice';
export { getAddCommentFormText, getAddCommentFormError } from './model/selectors/getAddCommentFormSelectors';
export { addCommentForArticle } from './model/services/addNewComment';
export { AddNewCommentFormLazy as AddNewComment } from './ui/AddNewComment/AddNewComment.lazy';
export type { AddCommentSchema } from './model/types/AddCommentSchema';
