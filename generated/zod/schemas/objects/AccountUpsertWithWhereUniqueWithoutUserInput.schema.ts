import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutUserInputObjectSchema as AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema as AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema';
import { AccountCreateWithoutUserInputObjectSchema as AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema as AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AccountUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput>;
export const AccountUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
