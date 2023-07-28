/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Seats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Tables` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Seats_number_key" ON "Seats"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Tables_number_key" ON "Tables"("number");
