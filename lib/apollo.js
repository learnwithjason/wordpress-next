import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://34.219.1.30/graphql',
  cache: new InMemoryCache(),
});
