import { Module } from '@nestjs/common';
import { UserExpenseCategoriesService } from './user-expense-categories.service';
import { UserExpenseCategoriesController } from './user-expense-categories.controller';

@Module({
  controllers: [UserExpenseCategoriesController],
  providers: [UserExpenseCategoriesService],
})
export class UserExpenseCategoriesModule {}
