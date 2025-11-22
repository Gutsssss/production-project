import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};
