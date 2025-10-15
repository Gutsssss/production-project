import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?:string,
  onChange?:(value:string) => void;
  autofocus?:boolean
}

export const Input = memo((props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const {
        className, value, onChange, type, placeholder, autofocus, ...otherProps
    } = props;
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            ) }
            <input
                ref={ref}
                type={type}
                className={cls.input}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                {...otherProps}
            />
        </div>
    );
});
