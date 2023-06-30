-- CreateTable
CREATE TABLE "ExpenseCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ExpenseCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserExpenseCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "UserExpenseCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserExpenseCategories" ADD CONSTRAINT "UserExpenseCategories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExpenseCategories" ADD CONSTRAINT "UserExpenseCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ExpenseCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
