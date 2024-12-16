import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios, { CancelTokenSource } from "axios"

interface UseJobsSearchProps<T> {
  endpoint: string
  query?: string
  pageNumber: number
  selectedSource?: string
  fetchOnMount?: boolean
}

interface UseJobsSearchReturn<T> {
  loading: boolean
  error: boolean
  jobs: T[]
  totalJobs: number
  hasMore: boolean
  triggerRevalidate: () => void
}

export default function useJobsSearch<T>({
  endpoint,
  query,
  pageNumber,
  selectedSource,
  fetchOnMount = true,
}: UseJobsSearchProps<T>): UseJobsSearchReturn<T> {
  const router = useRouter()
  const [loading, setLoading] = useState(fetchOnMount)
  const [error, setError] = useState(false)
  const [jobs, setJobs] = useState<T[]>([])
  const [totalJobs, setTotalJobs] = useState(0)
  const [hasMore, setHasMore] = useState(false)
  const [revalidate, setRevalidate] = useState(false)

  const triggerRevalidate = () => setRevalidate((prev) => !prev)

  useEffect(() => {
    setJobs([])
  }, [query, , selectedSource])

  useEffect(() => {
    const local = localStorage.getItem("token")
    const token = local ? JSON.parse(local) : null

    if (!token) {
      router.push("/login")
      return
    }

    if (!fetchOnMount && pageNumber === 1) return

    setLoading(true)
    setError(false)

    let cancel: CancelTokenSource

    const params = {
      limit: 10,
      skip: (pageNumber - 1) * 10,
      ...(query && { search: query }),
      ...(selectedSource && { source: selectedSource }),
    }

    const fetchData = async () => {
      try {
        cancel = axios.CancelToken.source()
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
            params,
            cancelToken: cancel.token,
          }
        )

        const fetchedData: T[] = res?.data?.jobs

        setJobs((prev) => [...prev, ...fetchedData])
        setTotalJobs(res?.data?.pagination?.totalCount)
        setHasMore(fetchedData.length === params.limit)
        setLoading(false)
      } catch (e) {
        if (axios.isCancel(e)) return
        setError(true)
        setLoading(false)
      }
    }

    fetchData()

    return () => cancel?.cancel()
  }, [endpoint, query, pageNumber, selectedSource, fetchOnMount, revalidate])

  return {
    loading,
    error,
    jobs,
    totalJobs,
    hasMore,
    triggerRevalidate,
  }
}
