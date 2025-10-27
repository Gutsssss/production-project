import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  text?:ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, text }: ArticleCodeBlockComponentProps) => (
    <pre className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
        <Code text={text.code} className={cls.code} />
    </pre>
));
