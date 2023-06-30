import { Injectable } from '@nestjs/common';
import { CreateUserExpenseCategoryDto } from './dto/create-user-expense-category.dto';
import { UpdateUserExpenseCategoryDto } from './dto/update-user-expense-category.dto';

@Injectable()
export class UserExpenseCategoriesService {
  create(createUserExpenseCategoryDto: CreateUserExpenseCategoryDto) {
    return 'This action adds a new userExpenseCategory';
  }

  findAll() {
    return `This action returns all userExpenseCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userExpenseCategory`;
  }

  update(
    id: number,
    updateUserExpenseCategoryDto: UpdateUserExpenseCategoryDto,
  ) {
    return `This action updates a #${id} userExpenseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} userExpenseCategory`;
  }
}
