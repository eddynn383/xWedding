-- CreateTable
CREATE TABLE "Tables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Seats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    CONSTRAINT "Seats_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Seats_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guests" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Guests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "arrived" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Guests_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Seats_guestId_key" ON "Seats"("guestId");
