-- CreateTable
CREATE TABLE "listURL" (
    "id" SERIAL NOT NULL,
    "long_url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,

    CONSTRAINT "listURL_pkey" PRIMARY KEY ("id")
);
