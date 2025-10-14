import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?:ReactNode;
  isOpen?:boolean;
  onCLose?:() => void
}
const ANIMATION_TIME = 300;
export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onCLose,
    } = props;
    const [isClosing, setIsclosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();
    const closeHandler = useCallback(() => {
        if (onCLose) {
            setIsclosing(true);
            timerRef.current = setTimeout(() => {
                onCLose();
                setIsclosing(false);
            }, ANIMATION_TIME);
        }
    }, [onCLose]);
    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };
    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={classNames(
                            cls.content,
                        )}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
