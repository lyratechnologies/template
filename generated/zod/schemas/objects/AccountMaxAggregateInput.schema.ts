import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  accountId: z.literal(true).optional(),
  providerId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  accessToken: z.literal(true).optional(),
  refreshToken: z.literal(true).optional(),
  idToken: z.literal(true).optional(),
  accessTokenExpiresAt: z.literal(true).optional(),
  refreshTokenExpiresAt: z.literal(true).optional(),
  scope: z.literal(true).optional(),
  password: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountMaxAggregateInputType>;
export const AccountMaxAggregateInputObjectZodSchema = makeSchema();
