-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Guests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tableId" TEXT,
    "arrived" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Guests_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Guests" ("arrived", "createdAt", "id", "name", "tableId", "updatedAt") SELECT "arrived", "createdAt", "id", "name", "tableId", "updatedAt" FROM "Guests";
DROP TABLE "Guests";
ALTER TABLE "new_Guests" RENAME TO "Guests";
CREATE UNIQUE INDEX "Guests_name_key" ON "Guests"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
