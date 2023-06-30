import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserExpenseCategoriesService } from './user-expense-categories.service';
import { CreateUserExpenseCategoryDto } from './dto/create-user-expense-category.dto';
import { UpdateUserExpenseCategoryDto } from './dto/update-user-expense-category.dto';

@Controller('user-expense-categories')
export class UserExpenseCategoriesController {
  constructor(
    private readonly userExpenseCategoriesService: UserExpenseCategoriesService,
  ) {}

  @Post()
  create(@Body() createUserExpenseCategoryDto: CreateUserExpenseCategoryDto) {
    return this.userExpenseCategoriesService.create(
      createUserExpenseCategoryDto,
    );
  }

  @Get()
  findAll() {
    return this.userExpenseCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userExpenseCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserExpenseCategoryDto: UpdateUserExpenseCategoryDto,
  ) {
    return this.userExpenseCategoriesService.update(
      +id,
      updateUserExpenseCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userExpenseCategoriesService.remove(+id);
  }
}
