import { Client } from "./constant";

export const Get_query = async (gql, variables) => {
  try {
    const { data } = await Client.query({
      query: gql,
      variables: variables,
    });
    return { data };
  } catch (error) {
    return error.message;
  }
};
export const Post_query = async (gql, variables) => {
  try {
    const res = await Client.mutate({
      mutation: gql,
      variables: variables,
    });
    return res;
  } catch (error) {
    return error.message;
  }
};
