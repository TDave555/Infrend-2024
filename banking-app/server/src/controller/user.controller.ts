import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Controller } from "./base.controller";

export class UserController extends Controller {
  repository = AppDataSource.getRepository(User);
}
