import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client";
import deletesvg from "./Assets/images/delete_backspace.svg";
import { setContext } from "@apollo/client/link/context";
import { token } from "./APIs/RESTapi";
import takeway from "./Assets/images/takeway.svg";

export const httpLink = createHttpLink({
  uri: "https://dev-restaurant.eezzypos.com/graphql",
});

export const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: token,
    },
  };
  // }
});

export const Client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

// const  defaultoptions: DefaultOptions{
//   watchQuery:{
//     fetchPolicy:"no-cache",
//     errorPolicy:"ignore",
//   }
//   query:{
//     fetchPolicy:"no-cache",
//     errorpolicy:"all"
//   }

// }

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
export const GET_ORDERS = gql`
  query getOrders(
    $id: ID!
    $search: String
    $order_no: String
    $today: String
    $outlet_id: ID!
    $business_id: ID!
    $is_online_order: String
    $terminal_id: ID
  ) {
    getOrderList(
      id: $id
      search: $search
      order_no: $order_no
      today: $today
      outlet_id: $outlet_id
      business_id: $business_id
      is_online_order: $is_online_order
      terminal_id: $terminal_id
    ) {
      successful
      data
      message
      __typename
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
export const GET_KOTORDER_LIST = gql`
  query getKotOrderList(
    $id: ID
    $search: String
    $order_no: String
    $today: String
    $business_id: ID!
    $outlet_id: ID!
    $is_machine: ID!
    $terminal_id: ID
  ) {
    getKotOrderList(
      id: $id
      search: $search
      order_no: $order_no
      today: $today
      business_id: $business_id
      outlet_id: $outlet_id
      is_machine: $is_machine
      terminal_id: $terminal_id
    ) {
      successful
      data
      message
      __typename
    }
  }
`;
export const DELETE_KOTORDERS = gql`
  mutation orderCancel(
    $id: ID!
    $reason: String
    $type: String
    $request_from: String
  ) {
    cancelOrder(
      id: $id
      reason: $reason
      type: $type
      request_from: $request_from
    ) {
      successful
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

export const handleOrderType = (obj) => {
  if (obj) {
    return obj.map((tab) => (
      <div className="space-y-2 ">
        <div>
          <img src="" alt="" />
          <p className="text-lite-green  font-semibold">{tab.table_name}</p>
        </div>
        <div className="flex font-medium">
          <p>{tab.floor_name}</p>/<p>{tab.area_name}</p>
        </div>
      </div>
    ));
  } else {
    return (
      <div className="flex space-x-1 font-medium">
        <img src={takeway} alt="" width={16} height={16} />
        <p className="text-dark-orange font-medium">Take Away</p>
      </div>
    );
  }
};
