-- CreateTable
CREATE TABLE "Plataform" (
    "id" SERIAL NOT NULL,
    "Stage1" TEXT,
    "Stage2" TEXT,
    "Stage3" TEXT,
    "Stage4" TEXT,
    "Stage5" TEXT,
    "Stage6" TEXT,
    "Stage7" TEXT,
    "Stage8" TEXT,
    "Stage9" TEXT,
    "Stage10" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plataform_pkey" PRIMARY KEY ("id")
);
