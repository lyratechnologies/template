import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryUpdateWithoutAttendeeInputObjectSchema as WaitlistEntryUpdateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUpdateWithoutAttendeeInput.schema';
import { WaitlistEntryUncheckedUpdateWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedUpdateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedUpdateWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WaitlistEntryUpdateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedUpdateWithoutAttendeeInputObjectSchema)])
}).strict();
export const WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInput>;
export const WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInputObjectZodSchema = makeSchema();
