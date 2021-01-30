import { FC } from 'react';
import styles from './index.module.css';

type Props = {
  content: string;
}

const Paragraph: FC<{ p: string }> = ({ p }) => <div className={styles.paragraph}>{ p }</div>

export const Article: FC<Props> = ({content}) => (
  <>
    {content.split('\n\n').map((p, i) => <Paragraph p={p} key={i} />)}
  </>
)