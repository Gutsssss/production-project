import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  image?:ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, image }: ArticleImageBlockComponentProps) => (
    <>
        <img
            src={image.src}
            alt={image.title}
            className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
        />
        {image?.title && <Text title={image.title} className={cls.title} />}
    </>
));
