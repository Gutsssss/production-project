import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
        ArticlesPage
    </div>
);
