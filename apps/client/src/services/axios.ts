import a from 'axios'

export const axios = a.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API_URL,
  timeout: 3000,
  withCredentials: true,
})
