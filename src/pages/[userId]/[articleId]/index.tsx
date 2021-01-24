import { useRouter } from "next/dist/client/router";
import { NextPage } from 'next';
import Error from 'next/error';
import Image from 'next/image';
import { useGetArticleQuery } from '../../../generated/graphql';
import styles from './index.module.css';

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const { loading, error, data } = useGetArticleQuery({
    variables: {
      id: articleId as string
    }
  })
  if(loading){
    return <p>...loading</p>
  }
  if(error){
    return  <p>{error.message}</p>
  }
  if(!data || !data.articles_by_pk){
    return <Error statusCode={404} />
  }
  const { user, subject, content } = data.articles_by_pk;
  return  (
    <div className={styles.contentContainer}>
      <h1 className={styles.subject}>{subject}</h1>
      <div className={styles.userContainer}>
        <div>
          <Image className={styles.userIcon} src="/public/profile.jpg" width={48} height={48} />
        </div>
        <div>
          <div className={styles.userId}>{user.displayId}</div>
          <span className={styles.userName}>{user.displayName}</span>
        </div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  )
}

export default ArticlePage