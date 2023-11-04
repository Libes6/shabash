import React, {FC, PropsWithChildren} from 'react';
import { clsx } from 'clsx';
interface IHeading{
    className?:string
}
const Heading: FC<PropsWithChildren<IHeading>> = ({className,children}) => {
    return <h1 className={clsx('font-semibold text-3xl',className)}>{children}</h1>
};

export default Heading;