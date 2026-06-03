import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryUpdateWithoutAttendeeInputObjectSchema as WaitlistEntryUpdateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUpdateWithoutAttendeeInput.schema';
import { WaitlistEntryUncheckedUpdateWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedUpdateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedUpdateWithoutAttendeeInput.schema';
import { WaitlistEntryCreateWithoutAttendeeInputObjectSchema as WaitlistEntryCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryCreateWithoutAttendeeInput.schema';
import { WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WaitlistEntryUpdateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedUpdateWithoutAttendeeInputObjectSchema)]),
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema)])
}).strict();
export const WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInput>;
export const WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInputObjectZodSchema = makeSchema();
