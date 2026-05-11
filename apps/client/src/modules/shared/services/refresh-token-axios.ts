import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean
}

export const refreshTokenApi = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  withCredentials: true,
})

let refreshPromise: Promise<void> | null = null

const refreshAccessToken = async () => {
  await refreshTokenApi.post(`${API_URL}/auth/refresh-token`, {})
}

refreshTokenApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry ||
      originalRequest.url?.includes('/auth/refresh-token')
    ) {
      return Promise.reject(error)
    }

    originalRequest._retry = true

    try {
      refreshPromise ??= refreshAccessToken()

      await refreshPromise

      return refreshTokenApi(originalRequest)
    } catch (refreshError) {
      return Promise.reject(refreshError)
    } finally {
      refreshPromise = null
    }
  },
)
