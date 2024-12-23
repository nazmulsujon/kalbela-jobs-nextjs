import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"

interface UseApiRequestResponse<T> {
  data: T | null
  loading: boolean
  error: string | null
}

const useApiRequest = <T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT",
  body?: any
): UseApiRequestResponse<T> => {
  const url = `${process.env.NEXT_APP_BASE_URL}/api/v1/${endpoint}`
  console.log("from hook", url)
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        let response: AxiosResponse<T> | null = null

        if (method === "GET") {
          response = await axios.get(url)
        } else if (method === "POST") {
          response = await axios.post(url, body)
        } else if (method === "PUT") {
          response = await axios.put(url, body)
        }

        if (response) {
          setData(response.data)
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, method, body])

  return { data, loading, error }
}

export default useApiRequest
