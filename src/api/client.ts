import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const generalRequest = async <T>(
  config: AxiosRequestConfig,
): Promise<T> => {
  try {
    const { data } = await api.request<T>(config)

    return data
  } catch (error: unknown) {
    if (axios.isCancel(error)) {
      throw error
    }

    console.error('API request failed:', error)

    throw error
  }
}
