import { getProductsUseCase } from "../../../../core/UseCase/GetProductsUseCase/index.js";
import { GetProductsController } from "./GetProductsController.js";

export const getProductsController = new GetProductsController(getProductsUseCase)