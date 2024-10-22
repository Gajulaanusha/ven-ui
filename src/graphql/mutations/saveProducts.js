import {gql} from "@apollo/client"
export const SAVE_PRODUCTS=gq`

mutation Mutation($productInput:ProductInput){
 saveProduct(productInput:$ProductInput
 )
}`