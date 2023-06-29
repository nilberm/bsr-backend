import { Injectable } from '@nestjs/common';
import { CreateCategoriesExpenseDto } from './dto/create-categories-expense.dto';
import { UpdateCategoriesExpenseDto } from './dto/update-categories-expense.dto';

@Injectable()
export class CategoriesExpensesService {
  create(createCategoriesExpenseDto: CreateCategoriesExpenseDto) {
    return 'This action adds a new categoriesExpense';
  }

  findAll() {
    return `This action returns all categoriesExpenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriesExpense`;
  }

  update(id: number, updateCategoriesExpenseDto: UpdateCategoriesExpenseDto) {
    return `This action updates a #${id} categoriesExpense`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriesExpense`;
  }
}
