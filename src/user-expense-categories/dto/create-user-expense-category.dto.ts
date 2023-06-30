import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserExpenseCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  categoryId: number;
}
