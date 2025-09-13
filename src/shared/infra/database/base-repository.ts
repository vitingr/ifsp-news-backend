import { PaginationParams } from './pagination/types'

export abstract class BaseRepository {
  protected getPaginationFilter(pagination: PaginationParams) {
    return {
      skip: (pagination.page - 1) * pagination.pageSize,
      take: pagination.pageSize
    }
  }
}
