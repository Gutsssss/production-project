import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { AddNewComment } from 'entities/Comment/ui/AddNewComment/AddNewComment';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { addCommentFormReducer } from 'entities/Comment';

interface addCommentInArticleProps {
  className?: string;
  onSend?:(value:string) => void
}
const reducers:ReducerList = {
    addCommentForm: addCommentFormReducer,
};
export const AddCommentInArticle = memo(({ className, onSend }: addCommentInArticleProps) => {
    useAcyncReducer({ reducers });
    return (
        <div className={classNames('', {}, [className])}>
            <AddNewComment onSend={onSend} />
        </div>
    );
});
