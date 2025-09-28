import { FastifyInstance } from "fastify";
import { createCategoryController } from "./create-category";
import { deleteCategoryController } from "./delete-category";
import { getAllCategoriesController } from "./get-all-categories";
import { getCategoryByIdController } from "./get-category-by-id";
import { updateCategoryController } from "./update-category";

export const categoriesRoutes = async (app: FastifyInstance) => {
  createCategoryController.register(app)
  deleteCategoryController.register(app)
  getAllCategoriesController.register(app)
  getCategoryByIdController.register(app)
  updateCategoryController.register(app)
}
