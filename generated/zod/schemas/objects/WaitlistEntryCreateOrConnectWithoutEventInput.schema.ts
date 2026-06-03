import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryCreateWithoutEventInputObjectSchema as WaitlistEntryCreateWithoutEventInputObjectSchema } from './WaitlistEntryCreateWithoutEventInput.schema';
import { WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema as WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateOrConnectWithoutEventInput>;
export const WaitlistEntryCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
