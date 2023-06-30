import { Module } from '@nestjs/common';
import { UserExpenseCategoriesService } from './user-expense-categories.service';
import { UserExpenseCategoriesController } from './user-expense-categories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserExpenseCategoriesController],
  providers: [UserExpenseCategoriesService],
  exports: [UserExpenseCategoriesService],
})
export class UserExpenseCategoriesModule {}
