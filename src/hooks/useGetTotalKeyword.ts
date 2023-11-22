import {
  useQuery
} from '@tanstack/react-query'
import axios from 'axios'
import { Keyword } from '../interfaces/Keyword'

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useGetTotalKeyword = () => {
    // console.log(url);
    return useQuery(['getTotalKeywords'],{
        queryFn : async () => {
          const { data } = await axios.get(
              `http://localhost:8080/api/v1/keywords/all`
          )
          return data as Keyword[];
      }
    })
}