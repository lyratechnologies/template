import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  position: z.boolean().optional(),
  promotedAt: z.boolean().optional(),
  cancelledAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  eventId: z.boolean().optional(),
  attendee: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  attendeeId: z.boolean().optional()
}).strict();
export const WaitlistEntrySelectObjectSchema: z.ZodType<Prisma.WaitlistEntrySelect> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntrySelect>;
export const WaitlistEntrySelectObjectZodSchema = makeSchema();
