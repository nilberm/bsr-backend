import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesExpenseDto } from './create-categories-expense.dto';

export class UpdateCategoriesExpenseDto extends PartialType(
  CreateCategoriesExpenseDto,
) {}
