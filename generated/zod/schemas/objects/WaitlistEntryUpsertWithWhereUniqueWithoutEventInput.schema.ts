import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryUpdateWithoutEventInputObjectSchema as WaitlistEntryUpdateWithoutEventInputObjectSchema } from './WaitlistEntryUpdateWithoutEventInput.schema';
import { WaitlistEntryUncheckedUpdateWithoutEventInputObjectSchema as WaitlistEntryUncheckedUpdateWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedUpdateWithoutEventInput.schema';
import { WaitlistEntryCreateWithoutEventInputObjectSchema as WaitlistEntryCreateWithoutEventInputObjectSchema } from './WaitlistEntryCreateWithoutEventInput.schema';
import { WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema as WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WaitlistEntryUpdateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const WaitlistEntryUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpsertWithWhereUniqueWithoutEventInput>;
export const WaitlistEntryUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
