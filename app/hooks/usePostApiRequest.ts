import { useState } from "react"
import axios, { AxiosResponse } from "axios"

interface UsePostApiRequestResponse<T> {
  data: T | null
  loading: boolean
  error: string | null
  sendRequest: (body?: any) => Promise<void>
}

const usePostApiRequest = <T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT"
): UsePostApiRequestResponse<T> => {
  const url = `${process.env.NEXT_APP_BASE_URL}/${endpoint}`
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const sendRequest = async (body?: any) => {
    setLoading(true)
    setError(null)

      let response: AxiosResponse<T> | null = null

      if (method === "GET") {
        response = await axios.get(url)
      } else if (method === "POST") {
        response = await axios.post(url, body)
      } else if (method === "PUT") {
        response = await axios.put(url, body)
      }

        if (response) {
             setLoading(false)
            setData(response.data)

      }

  }

  return { data, loading, error, sendRequest }
}

export default usePostApiRequest
