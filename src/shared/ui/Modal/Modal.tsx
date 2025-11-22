import React, {
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
  className?: string;
  children?:ReactNode;
  isOpen?:boolean;
  onClose?:() => void;
  lazy?:boolean;
}
const ANIMATION_TIME = 300;
export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onClose,
        lazy,
    } = props;
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_TIME,
        isOpen,
        onClose,
    });
    const { theme } = useTheme();
    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div
                    className={classNames(
                        cls.content,
                    )}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
