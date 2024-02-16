import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import deletesvg from "./Assets/images/delete_backspace.svg";
import { setContext } from "@apollo/client/link/context";

export const httpLink = createHttpLink({
  uri: "https://dev-restaurant.eezzypos.com/graphql",
});

export const authLink = setContext((_, { headers }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiYW5hbmRAZWZmaWNpZW50LXdvcmtzLmNvbSIsImxvZ19zZXNzaW9uX2lkIjoyMzgsInRlcm1pbmFsX2lkIjoxMywiaXNfYnVzaW5lc3NfYWRtaW4iOiIwIiwib3V0bGV0X2lkIjoxLCJidXNpbmVzc19pZCI6MSwiaWF0IjoxNzA4MDgyMjAyLCJleHAiOjE3MDgwODk0MDJ9.7ZWchcbYJ1QzWSBEmHu8r0JejMe08lK0fWr17-bn9ok";
  return {
    headers: {
      ...headers,
      token: token,
    },
  };
});

export const Client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

// query -- //

export const GET_CATEGORIES = gql`
  query getCategories($outlet_id: ID!, $business_id: ID!) {
    getAllCategory(outlet_id: $outlet_id, business_id: $business_id) {
      id
      cat_name
      is_pos_on
      cat_image
      color_code
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts(
    $outlet_id: ID!
    $business_id: ID!
    $cat_id: ID!
    $offset: ID!
  ) {
    getProducts(
      outlet_id: $outlet_id
      business_id: $business_id
      cat_id: $cat_id
      offset: $offset
    ) {
      successful
      data
      message
      __typename
    }
  }
`;

export const calcNumber = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "00",
  <img key="delete" src={deletesvg} alt="delete" />,
  ".",
  "cancel",
];

export const currancy = ["1", "2", "5", "10", "20", "50", "100"];
export const paiseamt = ["1", "2", "5", "10", "20", "50"];
