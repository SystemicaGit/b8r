import { Router } from "express";
import userRoutes from "../apis/user.routes";
import propertyRoutes from "../apis/property.routes";
import buyerRoutes from "../apis/buyer.routes";
import tenantRoutes from "../apis/tenant.routes";
import boardRoutes from "../apis/board.routes";

const router = Router();

router.use("/user", userRoutes);

router.use("/property", propertyRoutes);

router.use("/tenant", tenantRoutes);

router.use("/buyer", buyerRoutes);

router.use("/board", boardRoutes);

export default router;
