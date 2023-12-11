import React from "react";
import fetch from "cross-fetch";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
// Define the GraphQL endpoint URI
const graphqlEndpoint = "https://beta.pokeapi.co/graphql/v1beta";

const link = new HttpLink({ uri: graphqlEndpoint, fetch });

// Define the type for the ApolloWrapper props
interface ApolloWrapperProps {
  children: React.ReactNode;
}

// Create the Apollo Client instance
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// ApolloWrapper component with TypeScript
const ApolloWrapper = ({ children }: ApolloWrapperProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export { ApolloWrapper, client };
