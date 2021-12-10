import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import db from "../config/db";

const create = async (req: Request, res: Response) => {
  try {
    const { title } = req.body as Prisma.LanguageCreateInput;
    const createdLanguage = await db.language.create({
      data: {
        title,
      },
    });
    res.status(201).json({
      data: createdLanguage,
      message: "Language data created successfully",
    });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({
      message: err?.message,
    });
  }
};

const findAll = async (req: Request, res: Response) => {
  const data = await db.language.findMany();
  res.status(200).json({
    data,
    message: "Language datas fetched successfully",
  });
};

const findById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await db.language.findFirst({
    where: {
      id: +id,
    },
  });
  res.status(200).json({
    data,
    message: `data fetched successfully for language ${id}`,
  });
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body as Prisma.LanguageUpdateInput;

  const updatedData = await db.language.update({
    data: {
      title,
    },
    where: {
      id: +id,
    },
  });
  res.status(200).json({
    data: updatedData,
    message: `Language ${id} updated successfully`,
  });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.language.delete({
    where: {
      id: +id,
    },
  });
  res.status(204).json({});
};

const languageController = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};

export default languageController;
