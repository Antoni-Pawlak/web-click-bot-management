import {
  useQuery
} from '@tanstack/react-query'
import axios from 'axios'
import { Keyword } from '../interfaces/Keyword'

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useGetKeywords = (query?: string) => {
    // console.log(query);
    return useQuery(['getKeyword'],{
        queryFn : async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/keywords/?${query}`
            )
            return data as Keyword[];
        }
    })
}