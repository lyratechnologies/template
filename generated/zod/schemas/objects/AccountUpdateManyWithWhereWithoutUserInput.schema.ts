import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountScalarWhereInputObjectSchema as AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema';
import { AccountUpdateManyMutationInputObjectSchema as AccountUpdateManyMutationInputObjectSchema } from './AccountUpdateManyMutationInput.schema';
import { AccountUncheckedUpdateManyWithoutUserInputObjectSchema as AccountUncheckedUpdateManyWithoutUserInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AccountUpdateManyMutationInputObjectSchema), z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput>;
export const AccountUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
