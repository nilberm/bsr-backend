import { Module } from '@nestjs/common';
import { CategoriesExpensesService } from './categories-expenses.service';
import { CategoriesExpensesController } from './categories-expenses.controller';

@Module({
  controllers: [CategoriesExpensesController],
  providers: [CategoriesExpensesService],
})
export class CategoriesExpensesModule {}
