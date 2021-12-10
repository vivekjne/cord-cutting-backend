import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import db from "../config/db";

const create = async (req: Request, res: Response) => {
  try {
    const { banner, live_url, name, languageId } = req.body;

    const createdChannel = await db.channel.create({
      data: {
        name,
        live_url,
        languageId,
        banner,
      },
    });
    res.status(201).json({
      data: createdChannel,
      message: "Channel data created successfully",
    });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({
      message: err?.message,
    });
  }
};

const findAll = async (req: Request, res: Response) => {
  const data = await db.channel.findMany();
  res.status(200).json({
    data,
    message: "Channel datas fetched successfully",
  });
};

const findById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await db.channel.findFirst({
    where: {
      id: +id,
    },
  });
  res.status(200).json({
    data,
    message: `data fetched successfully for channel ${id}`,
  });
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { banner, live_url, name, languageId } = req.body;

  const updatedData = await db.channel.update({
    data: {
      banner,
      name,
      live_url,
      languageId,
    },
    where: {
      id: +id,
    },
  });
  res.status(200).json({
    data: updatedData,
    message: `Channel ${id} updated successfully`,
  });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.channel.delete({
    where: {
      id: +id,
    },
  });
  res.status(204).json({});
};

const channelController = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};

export default channelController;
