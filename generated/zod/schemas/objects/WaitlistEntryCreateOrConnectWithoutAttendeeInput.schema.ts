import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryCreateWithoutAttendeeInputObjectSchema as WaitlistEntryCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryCreateWithoutAttendeeInput.schema';
import { WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema)])
}).strict();
export const WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateOrConnectWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateOrConnectWithoutAttendeeInput>;
export const WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectZodSchema = makeSchema();
