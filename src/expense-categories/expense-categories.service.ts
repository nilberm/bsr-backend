import { ConflictException, Injectable } from '@nestjs/common';
import { CreateExpenseCategoryDto } from './dto/create-expense-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ExpenseCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExpenseCategoryDto: CreateExpenseCategoryDto) {
    try {
      const data: Prisma.ExpenseCategoriesCreateInput = {
        ...createExpenseCategoryDto,
      };

      const createdExpenseCategory = await this.prisma.expenseCategories.create(
        {
          data,
        },
      );

      return createdExpenseCategory;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Expense category name needs to be unique');
      }

      throw error;
    }
  }

  async findAll() {
    try {
      const expenseCategories = await this.prisma.expenseCategories.findMany();

      return expenseCategories;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenseCategory`;
  }
}
