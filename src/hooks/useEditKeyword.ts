import {
  useMutation
} from '@tanstack/react-query'
import axios from 'axios'
import { Keyword } from '../interfaces/Keyword';

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useEditKeyword = (keyword?: Keyword) => {
    return useMutation({
        mutationFn : async (newKeyword: Keyword) => {
            await axios.put(
                `https://mock-backend-data-json-server.onrender.com/users/${newKeyword.id}`,
                newKeyword
            )
        }
    })
}