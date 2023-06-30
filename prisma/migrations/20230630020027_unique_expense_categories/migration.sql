/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ExpenseCategories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExpenseCategories_name_key" ON "ExpenseCategories"("name");
