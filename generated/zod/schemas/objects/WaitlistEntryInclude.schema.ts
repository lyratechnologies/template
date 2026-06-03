import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  attendee: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const WaitlistEntryIncludeObjectSchema: z.ZodType<Prisma.WaitlistEntryInclude> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryInclude>;
export const WaitlistEntryIncludeObjectZodSchema = makeSchema();
