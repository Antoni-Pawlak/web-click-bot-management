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
            const data = [
                {
                  "id": 1,
                  "keyword": "Keyword1",
                  "img": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
                  "link": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
                  "status": "Invited",
                  "amount": "5",
                  "last_login": "21 May, 2023 / 11:15 PM"
                },
                {
                  "id": 2,
                  "keyword": "Keyword2",
                  "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "sarah.johnson@example.com",
                  "status": "Active",
                  "amount": "3",
                  "last_login": "18 May, 2023 / 03:30 PM"
                },
                {
                  "id": 3,
                  "keyword": "Keyword3",
                  "img": "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
                  "link": "michael.anderson@example.com",
                  "status": "Active",
                  "amount": "4",
                  "last_login": "19 May, 2023 / 09:45 AM"
                },
                {
                  "id": 4,
                  "keyword": "Keyword4",
                  "img": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                  "link": "emily.davis@example.com",
                  "status": "Invited",
                  "amount": "4",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 5,
                  "keyword": "Keyword5",
                  "img": "//0.gravatar.com/avatar/d5279c8b66d25549a0ec3c8dd46a3d1a?s=120",
                  "link": "david.wilson@example.com",
                  "status": "Active",
                  "amount": "4",
                  "last_login": "19 May, 2023 / 11:00 AM"
                }];
            // const { data } = await axios.get(
            //     `https://mock-backend-data-json-server.onrender.com/users?${query}`
            // )
            return data as Keyword[];
        }
    })
}