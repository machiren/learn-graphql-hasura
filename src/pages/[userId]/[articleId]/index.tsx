import { useRouter } from "next/dist/client/router";
import { NextPage } from 'next';
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
  return  <div>{JSON.stringify(data)}</div>
}

export default ArticlePage