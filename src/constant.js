import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import deletesvg from "./Assets/images/delete_backspace.svg";
import { setContext } from "@apollo/client/link/context";
import { token } from "./APIs/RESTapi";

export const httpLink = createHttpLink({
  uri: "https://dev-restaurant.eezzypos.com/graphql",
});

export const authLink = setContext((_, { headers }) => {
  // const userinfo = window.localStorage.getItem("userlogin");
  // if (userinfo) {
  // const token = JSON.parse(userinfo).token;
  // console.log(token);
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
export const GET_PENDINGITEMS = gql`
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
