import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import BigPlate from 'shared/assets/icons/big-plate.svg';
import SmallPlate from 'shared/assets/icons/small-plate.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewProps {
  className?: string;
  view:ArticleView,
  onViewClick:(view:ArticleView) => void
}
const viewTypes = [
    {
        view: ArticleView.SMALL_PLATE,
        icon: SmallPlate,
    },
    {
        view: ArticleView.BIG_PLATE,
        icon: BigPlate,
    },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewProps) => {
    const onClick = (newView:ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleView, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button key={viewType.view} theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                    <Icon Svg={viewType.icon} className={classNames('', { [cls.notSelected]: viewType.view !== view })} />
                </Button>
            ))}

        </div>
    );
});
