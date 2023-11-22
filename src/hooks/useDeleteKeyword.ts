import {
  useMutation
} from '@tanstack/react-query'
import axios from 'axios'

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useDeleteKeyword = (KeywordId?: string) => {
    return useMutation({
        mutationFn : async () => {
            await axios.delete(
                `http://localhost:8080/api/v1/keywords/${KeywordId}`
            )
        }
    })
}