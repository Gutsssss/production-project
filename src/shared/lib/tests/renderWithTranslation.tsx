import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from '../../config/i18n/i18nForTests';

interface RenderWithTranslationProps {
    children:ReactNode
}
export function renderWithTranslation({ children }:RenderWithTranslationProps) {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            {children}
        </I18nextProvider>,
    );
}
