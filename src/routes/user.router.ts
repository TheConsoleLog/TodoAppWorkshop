import { Router } from "express";
import { createUserHandler, getUserHandler } from "../controller/user.controller";
import { validate } from "../validation/validation";
import { createUserSchema, getUserSchema } from "../schema/user.schema";

const router = Router();

router.get("/:id", validate(getUserSchema), getUserHandler);
router.post("/", validate(createUserSchema), createUserHandler)

export default router;
