import { Router } from "express";
import channelController from "../controllers/channel.controller";

const router = Router();

router.route("/").get(channelController.findAll).post(channelController.create);

router
  .route("/:id")
  .get(channelController.findById)
  .patch(channelController.updateById)
  .delete(channelController.deleteById);

export default router;
