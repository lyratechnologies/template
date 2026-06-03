import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryScalarWhereInputObjectSchema as WaitlistEntryScalarWhereInputObjectSchema } from './WaitlistEntryScalarWhereInput.schema';
import { WaitlistEntryUpdateManyMutationInputObjectSchema as WaitlistEntryUpdateManyMutationInputObjectSchema } from './WaitlistEntryUpdateManyMutationInput.schema';
import { WaitlistEntryUncheckedUpdateManyWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedUpdateManyWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedUpdateManyWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WaitlistEntryUpdateManyMutationInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutAttendeeInputObjectSchema)])
}).strict();
export const WaitlistEntryUpdateManyWithWhereWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpdateManyWithWhereWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateManyWithWhereWithoutAttendeeInput>;
export const WaitlistEntryUpdateManyWithWhereWithoutAttendeeInputObjectZodSchema = makeSchema();
