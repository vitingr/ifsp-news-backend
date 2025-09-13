import z from 'zod'

import { paginationQueryParamsSchema } from './base-pagination-schemas'

export interface PaginationQueryParams
  extends z.infer<typeof paginationQueryParamsSchema> {}
