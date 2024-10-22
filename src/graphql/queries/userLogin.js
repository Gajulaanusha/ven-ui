import {gql} from '@apollo/client'
export const USER_LOGIN=gql`
             query query($data:userInput){
   handleLogin(data:$data)
}
`