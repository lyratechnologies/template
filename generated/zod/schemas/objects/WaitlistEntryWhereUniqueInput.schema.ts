import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryEventIdPositionCompoundUniqueInputObjectSchema as WaitlistEntryEventIdPositionCompoundUniqueInputObjectSchema } from './WaitlistEntryEventIdPositionCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  eventId_position: z.lazy(() => WaitlistEntryEventIdPositionCompoundUniqueInputObjectSchema).optional()
}).strict();
export const WaitlistEntryWhereUniqueInputObjectSchema: z.ZodType<Prisma.WaitlistEntryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryWhereUniqueInput>;
export const WaitlistEntryWhereUniqueInputObjectZodSchema = makeSchema();
