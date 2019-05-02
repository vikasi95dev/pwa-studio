import { useContext } from 'react';
import { ApolloContext } from 'react-apollo';

export const useApolloContext = () => useContext(ApolloContext);
