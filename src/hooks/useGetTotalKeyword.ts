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
            const data  = [
                {
                  "id": 1,
                  "keyword": "John Smith",
                  "img": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
                  "link": "john.smith@example.com",
                  "status": "Invited",
                  "amount": "5",
                  "last_login": "21 May, 2023 / 11:15 PM"
                },
                {
                  "id": 2,
                  "keyword": "Sarah Johnson",
                  "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "sarah.johnson@example.com",
                  "status": "3",
                  "amount": "3",
                  "last_login": "18 May, 2023 / 03:30 PM"
                },
                {
                  "id": 3,
                  "keyword": "Michael Anderson",
                  "img": "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
                  "link": "michael.anderson@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 09:45 AM"
                },
                {
                  "id": 4,
                  "keyword": "Emily Davis",
                  "img": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                  "link": "emily.davis@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 5,
                  "keyword": "David Wilson",
                  "img": "//0.gravatar.com/avatar/d5279c8b66d25549a0ec3c8dd46a3d1a?s=120",
                  "link": "david.wilson@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 11:00 AM"
                },
                {
                  "id": 6,
                  "keyword": "Jessica Lee",
                  "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
                  "link": "jessica.lee@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "18 May, 2023 / 04:45 PM"
                },
                {
                  "id": 7,
                  "keyword": "Andrew Brown",
                  "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
                  "link": "andrew.brown@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 8,
                  "keyword": "Olivia Taylor",
                  "img": "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "olivia.taylor@example.com",
                  "status": "3",
                  "amount": "5",
                  "last_login": "19 May, 2023 / 08:20 AM"
                },
                {
                  "id": 9,
                  "keyword": "William Martinez",
                  "img": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202",
                  "link": "william.martinez@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 02:10 PM"
                },
                {
                  "id": 10,
                  "keyword": "Ava Thompson",
                  "img": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
                  "link": "ava.thompson@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 11,
                  "keyword": "Ethan Wilson",
                  "img": "https://images.unsplash.com/photo-1584677626646-7c8f83690304?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                  "link": "ethan.wilson@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 10:30 AM"
                },
                {
                  "id": 12,
                  "keyword": "Mia Rodriguez",
                  "img": "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "mia.rodriguez@example.com",
                  "status": "3",
                  "amount": "5",
                  "last_login": "19 May, 2023 / 09:15 AM"
                },
                {
                  "id": 13,
                  "keyword": "Alexander Anderson",
                  "img": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
                  "link": "alexander.anderson@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 03:50 PM"
                },
                {
                  "id": 14,
                  "keyword": "Sophia Garcia",
                  "img": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
                  "link": "sophia.garcia@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 15,
                  "keyword": "James Clark",
                  "img": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
                  "link": "james.clark@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 11:25 AM"
                },
                {
                  "id": 16,
                  "keyword": "Charlotte Lewis",
                  "img": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
                  "link": "charlotte.lewis@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 17,
                  "keyword": "Benjamin King",
                  "img": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
                  "link": "benjamin.king@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 18,
                  "keyword": "Harper Martinez",
                  "img": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
                  "link": "harper.martinez@example.com",
                  "status": "3",
                  "amount": "5",
                  "last_login": "19 May, 2023 / 01:40 PM"
                },
                {
                  "id": 19,
                  "keyword": "Henry Brown",
                  "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "henry.brown@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 09:05 AM"
                },
                {
                  "id": 20,
                  "keyword": "Amelia Thompson",
                  "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "amelia.thompson@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 21,
                  "keyword": "Daniel Davis",
                  "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "daniel.davis@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 11:55 AM"
                },
                {
                  "id": 22,
                  "keyword": "Madison Wilson",
                  "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "madison.wilson@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:35 AM"
                },
                {
                  "id": 23,
                  "keyword": "Samuel Lee",
                  "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "samuel.lee@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 24,
                  "keyword": "Evelyn Taylor",
                  "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "evelyn.taylor@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 12:25 PM"
                },
                {
                  "id": 25,
                  "keyword": "Joseph Johnson",
                  "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "joseph.johnson@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 09:55 AM"
                },
                {
                  "id": 26,
                  "keyword": "Mia Anderson",
                  "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "mia.anderson@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 09:55 AM"
                },
                {
                  "id": 27,
                  "keyword": "Samuel Clark",
                  "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "samuel.clark@example.com",
                  "status": "Invited",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 08:55 AM"
                },
                {
                  "id": 28,
                  "keyword": "Grace Martinez",
                  "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "grace.martinez@example.com",
                  "status": "3",
                  "amount": "5",
                  "last_login": "19 May, 2023 / 07:50 AM"
                },
                {
                  "id": 30,
                  "keyword": "Lily Davis",
                  "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  "link": "lily.davis@example.com",
                  "status": "3",
                  "amount": "Sales Rep",
                  "last_login": "19 May, 2023 / 09:35 AM"
                },
                {
                  "id": 31,
                  "keyword": "Yuvraj",
                  "img": "https://www.linkpicture.com/q/Img_3.jpg",
                  "link": "yuvi@example.com",
                  "status": "3",
                  "amount": "3",
                  "last_login": "21 May, 2023 / 11:15 PM"
                }
              ];
            return data as Keyword[];
        }
    })
}