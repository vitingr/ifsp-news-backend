import { FastifyInstance } from "fastify";
import { getArticleByIdController } from "./get-article-by-id";
import { getArticleBySlugController } from "./get-article-by-slug";
import { getAllArticlesController } from "./get-all-articles";
import { createArticleController } from "./create-article";
import { deleteArticleController } from "./delete-article";

export const articlesRoutes = async (app: FastifyInstance) => {
  createArticleController.register(app)
  deleteArticleController.register(app)
  getAllArticlesController.register(app)
  getArticleByIdController.register(app)
  getArticleBySlugController.register(app)
}
