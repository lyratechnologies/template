import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryScalarWhereInputObjectSchema as WaitlistEntryScalarWhereInputObjectSchema } from './WaitlistEntryScalarWhereInput.schema';
import { WaitlistEntryUpdateManyMutationInputObjectSchema as WaitlistEntryUpdateManyMutationInputObjectSchema } from './WaitlistEntryUpdateManyMutationInput.schema';
import { WaitlistEntryUncheckedUpdateManyWithoutEventInputObjectSchema as WaitlistEntryUncheckedUpdateManyWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WaitlistEntryUpdateManyMutationInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const WaitlistEntryUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateManyWithWhereWithoutEventInput>;
export const WaitlistEntryUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
