import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

export const Loader = () => (
    <div className={classNames('lds-ring')}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
