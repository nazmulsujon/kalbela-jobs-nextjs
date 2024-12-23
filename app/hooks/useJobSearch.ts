"use client"

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
  query = "",
  pageNumber,
  selectedSource = "",
  fetchOnMount = true,
}: UseJobsSearchProps<T>): UseJobsSearchReturn<T> {
  const [loading, setLoading] = useState(fetchOnMount)
  const [error, setError] = useState(false)
  const [jobs, setJobs] = useState<T[]>([])
  const [totalJobs, setTotalJobs] = useState(0)
  const [hasMore, setHasMore] = useState(false)
  const [revalidate, setRevalidate] = useState(false)

  const triggerRevalidate = () => setRevalidate((prev) => !prev)

  useEffect(() => {
    setJobs([])
  }, [query, selectedSource])

  useEffect(() => {
    if (!fetchOnMount && pageNumber === 1) return

    setLoading(true)
    setError(false)

    let cancel: CancelTokenSource

    const params = {
      limit: 10,
      page: (pageNumber - 1) * 10,
      ...(query && { search: query }),
      ...(selectedSource && { source: selectedSource }),
    }

    const fetchData = async () => {
      try {
        cancel = axios.CancelToken.source()
        const res = await axios.get(
          `${process.env.NEXT_APP_BASE_URL}/api/v1/${endpoint}`,
          {
            headers: { "Content-Type": "application/json" },
            params,
            cancelToken: cancel.token,
          }
        )

        const fetchedData: T[] = res.data.data.jobs
        const totalCount = res.data.data.pagination?.totalCount

        setJobs((prev) => [...prev, ...fetchedData])
        setTotalJobs(totalCount || 0)
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

  return { loading, error, jobs, totalJobs, hasMore, triggerRevalidate }
}
