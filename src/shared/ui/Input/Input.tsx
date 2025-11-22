import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';
import { RowFlex } from '../Stack/RowFlex/RowFlex';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?:string | number,
  onChange?:(value:string | number) => void;
  autofocus?:boolean;
  readonly?:boolean
}

export const Input = memo((props: InputProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const {
        className, value, onChange, type, placeholder, autofocus, readonly, ...otherProps
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
    const mods:Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <RowFlex gap="8" className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            ) }
            <input
                readOnly={readonly}
                ref={ref}
                type={type}
                className={cls.input}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                {...otherProps}
            />
        </RowFlex>
    );
});
