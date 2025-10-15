import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../../LoginForm/ui/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen:boolean,
    onClose:() => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onCLose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
