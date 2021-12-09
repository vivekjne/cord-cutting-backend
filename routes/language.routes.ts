import { Router } from "express";
import languageController from "../controllers/language.controller";

const router = Router();

router
  .route("/")
  .get(languageController.findAll)
  .post(languageController.create);

router
  .route("/:id")
  .get(languageController.findById)
  .patch(languageController.updateById)
  .delete(languageController.deleteById);

export default router;
