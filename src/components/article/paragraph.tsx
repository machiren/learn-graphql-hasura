import { FC } from 'react';
import styles from './index.module.css';

export const Paragraph: FC<{ p: string }> = ({ p }) => <div className={styles.paragraph}>{ p }</div>