import { PartialType } from '@nestjs/mapped-types';
import { CreateUserExpenseCategoryDto } from './create-user-expense-category.dto';

export class UpdateUserExpenseCategoryDto extends PartialType(CreateUserExpenseCategoryDto) {}
