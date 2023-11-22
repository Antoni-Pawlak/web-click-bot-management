import {
    useQuery
  } from '@tanstack/react-query'
  import axios from 'axios'
  
  const url = import.meta.env.VITE_REACT_APP_BACKEND_URL
  
  export const useStartBot = () => {
    //   return useMutation({
    //       mutationFn : async () => {
    //           await axios.get(
    //               `http://localhost:8080/api/v1/keywords/startbot`
    //           )
    //       }
    //   })
      return useQuery(['startBot'],{
        queryFn : async () => {
          const { data } = await axios.get(
            `http://localhost:8080/api/v1/keywords/startbot`
          )
          return data;
      }
    })
  }