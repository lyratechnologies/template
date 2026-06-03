import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  eventId: z.string(),
  position: z.number().int()
}).strict();
export const WaitlistEntryEventIdPositionCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WaitlistEntryEventIdPositionCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryEventIdPositionCompoundUniqueInput>;
export const WaitlistEntryEventIdPositionCompoundUniqueInputObjectZodSchema = makeSchema();
