import { useRouter } from "next/dist/client/router";
import { NextPage } from 'next';
import Error from 'next/error';
import { useGetArticleQuery } from '../../../generated/graphql';

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
    <div>
      <div>{JSON.stringify(user)}</div>
      <div>{subject}</div>
      <div>{content}</div>
    </div>
  )
}

export default ArticlePage