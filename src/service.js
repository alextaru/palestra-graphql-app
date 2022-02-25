import { GraphQLClient, gql } from 'graphql-request'
const endpoint = 'http://localhost:3333/graphql'
const graphQLClient = new GraphQLClient(endpoint)

const service = {
    getVendedoresEProdutos: async () => {
        const query = gql`
        {
          produtos{
            id
            nome
            marca
          }
          vendedores{
            id
            nome
            cpf
          }
        }
      `; 
        const data = await graphQLClient.request(query);
        return data;
    }
};

export default service;