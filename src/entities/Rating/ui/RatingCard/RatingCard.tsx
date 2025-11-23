import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { ColumnFlex } from '@/shared/ui/Stack/ColumnFlex/ColumnFlex';
import { Stars } from '@/shared/ui/Stars/Stars';
import { RowFlex } from '@/shared/ui/Stack/RowFlex/RowFlex';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?:number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);
    const isMobile = useDevice();
    const modalContent = (
        <>
            <Text
                title={feedbackTitle}
                theme={TextTheme.PRIMARY}
            />
            <Input
                value={feedback}
                placeholder={t('Ваш отзыв')}
                onChange={() => setFeedback}
            />
        </>
    );

    return (
        <Card fullWidth className={classNames(cls.RatingCard, {}, [className])}>
            <ColumnFlex align="center" gap="8">
                <Text title={title} />
                <Stars
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </ColumnFlex>
            {isMobile ? (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    {modalContent}
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} lazy>
                    <ColumnFlex max gap="32">
                        {modalContent}
                        <RowFlex max gap="16" justify="end">
                            <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandle}>
                                {t('Отправить')}
                            </Button>
                        </RowFlex>
                    </ColumnFlex>
                </Modal>
            )}
        </Card>
    );
});
