import { ApolloClient, HttpLink, HttpOptions, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppProps } from 'next/app';

import 'minireset.css';

const httpLinkConfig: HttpOptions = {
  uri: 'http://localhost:8080/v1/graphql'
};

const apolloClientConfig = {
  link: new HttpLink(httpLinkConfig),
  cache: new InMemoryCache()
};

const createApolloClient = () => {
  return new ApolloClient(apolloClientConfig);
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
};

export default MyApp