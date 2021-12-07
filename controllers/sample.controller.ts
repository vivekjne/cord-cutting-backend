import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const body = req.body;
  res.status(201).json({
    data: body,
    message: "Sample data created successfully",
  });
};

const findAll = async (req: Request, res: Response) => {
  res.status(200).json({
    data: [],
    message: "Sample datas fetched successfully",
  });
};

const findById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    data: {},
    message: `data fetched successfully for sample ${id}`,
  });
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  res.status(200).json({
    data: body,
    message: `Sample ${id} updated successfully`,
  });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(204).json({});
};

const sampleController = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};

export default sampleController;
