export type PaginationParams = {
  page: number
  pageSize: number
}

export interface PaginationReturn {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export type WithPagination<T> = {
  pagination: PaginationReturn
  data: T[]
}
