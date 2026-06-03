import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutUserInputObjectSchema as AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema as AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AccountCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput>;
export const AccountCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
