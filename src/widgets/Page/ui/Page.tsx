import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfinitieScroll/useInfinitieScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollSaveByPath, saveScrollActions } from '@/features/ScrollSave';
import { useInintinalEffect } from '@/shared/lib/hooks/useInintialEffect/useInintialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { StateSchema } from '@/app/providers/StoreProvider';
import { DataTesting } from '@/shared/types/dataTest';

interface PageProps extends DataTesting{
  className?: string;
  children:ReactNode;
  onScrollEnd?:() => void
}

export const Page = (props: PageProps) => {
    const { children, className, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const getPosition = useSelector((state:StateSchema) => getScrollSaveByPath(state, pathname));
    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });
    useInintinalEffect(() => {
        wrapperRef.current.scrollTop = getPosition;
    });
    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(saveScrollActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    return (
        <section
            data-testid={props['data-testid'] ?? 'Page'}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd && <div className={cls.targetRef} ref={triggerRef} />}
        </section>
    );
};
