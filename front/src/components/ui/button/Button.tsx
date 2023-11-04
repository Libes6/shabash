import { clsx } from 'clsx';
import React, {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  ReactNode,
} from 'react';

interface IButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconSide?: 'left' | 'right';
}
const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  size = 'md',
  icon,
  iconSide = 'left',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        'rounded px-6 py-2 font-medium shadow relative pr-6 text-center flex justify-center',
        {
          'text-secondary bg-blue text-white': variant === 'dark',
          'text-primary bg-white border border-primary ':
            variant === 'light',
        },
        {
          'px-4 py-2': size === 'sm',
          'px-18 py-2': size === 'lg',
        },

        'hover:shadow relative',
        className,
      )}
    >
      <div
        className={clsx(
          'flex  gap-3 items-center flex-row text-center',
          {
            'flex-row': iconSide === 'left',
            'flex-row-reverse': iconSide === 'right',
          },
        )}
      >
        {icon ? <div className="fill-white">{icon}</div> : null}
        {children}
      </div>
    </button>
  );
};

export default Button;
