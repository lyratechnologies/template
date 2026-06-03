import * as z from 'zod';
export const AccountFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  user: z.unknown(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  idToken: z.string().optional(),
  accessTokenExpiresAt: z.date().optional(),
  refreshTokenExpiresAt: z.date().optional(),
  scope: z.string().optional(),
  password: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});