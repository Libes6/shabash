import React, {FC, PropsWithChildren} from 'react';
import styles from './badge.module.scss'
interface IBadge{
    children:React.ReactNode
    index:number
}
const Badge: FC<IBadge> = ({children,index}) => {
    return (
        <div className={styles.main}>
            {children}
            <div className={styles.badge}><span className={styles.badge__number}>{index}</span></div>
        </div>
    );
};

export default Badge;