import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutUserInputObjectSchema as AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema as AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AccountUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput>;
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
