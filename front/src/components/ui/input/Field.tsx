import { clsx } from 'clsx';
import React, {
  FC,
  PropsWithChildren,
  forwardRef,
} from 'react';

import { IField } from '@/components/ui/input/fild.Interface';

import styles from './field.module.scss';

//
// const Field =forwardRef<HTMLInputElement,IField> (
//     ( {placeholder,error,className,type='text',
//           style,...rest},ref)=> {
//     return (
//         <div>
//
//         </div>
//     );
// }

const Field = forwardRef<HTMLInputElement, IField>(
  (props, ref) => {
    const {
      placeholder,
      error,
      className,
      type = 'text',
      style,
      Icon,
      ...rest
    } = props;
    return (
      <div
        className={clsx(styles.field, 'mb-2', className)}
        style={style}
      >
        <label>
          {Icon && <Icon className="mr-3" />}
          <span className="mb-1 block">{placeholder}</span>
          <input
            placeholder={placeholder}
            ref={ref}
            className={clsx(
              'px-4 py-2 w-full outline-none rounded-md border focus:border-primary transition-all placeholder:text-gray ',
              {
                'border-red': !!error,
                'border-border-gray-300': !error,
              },
              {
                'focus:border-red': !!error,
                'focus:border-primary': !error,
              },
            )}
            type={type}
            {...rest}
          />
        </label>
        <div className={styles.error}>{error && error}</div>
      </div>
    );
  },
);

Field.displayName = 'Field';
export default Field;
