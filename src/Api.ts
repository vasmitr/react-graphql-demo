import { ApolloClient, InMemoryCache, ApolloProvider, gql, OperationVariables, ApolloClientOptions, DocumentNode } from '@apollo/client';
import { QueryOptions } from '@testing-library/react';


const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com/',
    cache: new InMemoryCache(),
  });

 

  export async function fetchGqlApi<T extends DocumentNode, U extends OperationVariables> (
    query: T,
    variables: U
    ) {
    return client.query({ query, variables });
  }
