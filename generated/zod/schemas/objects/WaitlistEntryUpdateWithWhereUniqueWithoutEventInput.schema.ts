import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryUpdateWithoutEventInputObjectSchema as WaitlistEntryUpdateWithoutEventInputObjectSchema } from './WaitlistEntryUpdateWithoutEventInput.schema';
import { WaitlistEntryUncheckedUpdateWithoutEventInputObjectSchema as WaitlistEntryUncheckedUpdateWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WaitlistEntryUpdateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const WaitlistEntryUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateWithWhereUniqueWithoutEventInput>;
export const WaitlistEntryUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
