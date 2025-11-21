import {
    useState, useRef, useEffect, useCallback,
} from 'react';

export interface UseModalProps {
    onClose?:() => void;
    isOpen?:boolean;
    animationDelay?:number
}

export const useModal = ({ animationDelay, isOpen, onClose }:UseModalProps) => {
    const [isClosing, setIsclosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    const close = useCallback(() => {
        if (onClose) {
            setIsclosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsclosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);
    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);
    // const onContentClick = (e:React.MouseEvent) => {
    //     e.stopPropagation();
    // };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    return {
        isClosing,
        isMounted,
        close,
    };
};
