import logo from './logo.svg';
import './App.css';
import Tags from './components/tags'

import { ApolloProvider ,useQuery,gql} from '@apollo/client';
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;



function App({client}) {
  return (
    <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Tags/>
    </div>
  </ApolloProvider>
  );
}

export default App;
