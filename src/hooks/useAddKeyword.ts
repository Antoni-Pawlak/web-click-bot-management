import {
  useMutation
} from '@tanstack/react-query'
import axios from 'axios'
import { Keyword } from '../interfaces/Keyword';

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useAddKeyword = (keyword?: Keyword) => {
    return useMutation({
        mutationFn : async (newKeyword: Keyword) => {
            await axios.put(
                `http://localhost:8080/api/v1/keywords/`,
                newKeyword
            )
        }
    })
}