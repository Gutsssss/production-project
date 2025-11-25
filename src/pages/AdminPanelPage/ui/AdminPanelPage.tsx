import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const AdminPanelPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Панель администратора')}
        </Page>
    );
};
