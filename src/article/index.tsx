import { FC } from 'react';
import { Paragraph } from '../components/article/paragraph'

type Props = {
  content: string;
}


export const Article: FC<Props> = ({content}) => (
  <>
    {content.split('\n\n').map((p, i) => <Paragraph p={p} key={i} />)}
  </>
)