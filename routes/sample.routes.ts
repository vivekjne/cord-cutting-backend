import { Router } from "express";
import sampleController from "../controllers/sample.controller";

const router = Router();

router.route("/").get(sampleController.findAll).post(sampleController.create);

router
  .route("/:id")
  .get(sampleController.findById)
  .patch(sampleController.updateById)
  .delete(sampleController.deleteById);

export default router;
