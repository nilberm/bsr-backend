import { Injectable } from '@nestjs/common';
import { CreateUserExpenseCategoryDto } from './dto/create-user-expense-category.dto';
import { UpdateUserExpenseCategoryDto } from './dto/update-user-expense-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { CreateUserExpenseCategoryData } from './models/CreateUserExpenseCategoryData';

@Injectable()
export class UserExpenseCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createUserExpenseCategoryDto: CreateUserExpenseCategoryDto,
    user: User,
  ) {
    const data: CreateUserExpenseCategoryData = {
      ...createUserExpenseCategoryDto,
      userId: user.id,
    };

    const createdUserExpenseCategory =
      await this.prisma.userExpenseCategories.create({ data });

    return createdUserExpenseCategory;
  }

  async findAll() {
    const allUserExpenseCategories =
      await this.prisma.userExpenseCategories.findMany();

    return allUserExpenseCategories;
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
