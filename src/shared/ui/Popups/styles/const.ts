import { DropdownDirection } from 'shared/types/ui';
import cls from './styles.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.optionTopLeft,
    'top right': cls.optionTopRight,
    'bottom left': cls.optionBottomLeft,
    'bottom right': cls.optionBottomRight,
};
