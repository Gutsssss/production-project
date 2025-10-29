import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from 'entities/Comment/model/selectors/getAddCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions } from 'entities/Comment/model/slice/AddCommentSlice';
import cls from './AddNewComment.module.scss';

interface AddNewCommentProps {
  className?: string;
  onSend?:(text:string) => void
}

export const AddNewComment = memo(({ className, onSend }: AddNewCommentProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onSend(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSend, text]);

    return (
        <div className={classNames(cls.AddNewComment, {}, [className])}>
            <Input className={cls.input} placeholder={t('Введите текст комметария')} value={text} onChange={onCommentTextChange} />
            <Button onClick={onSendHandler}>{t('Отправить')}</Button>
        </div>
    );
});
