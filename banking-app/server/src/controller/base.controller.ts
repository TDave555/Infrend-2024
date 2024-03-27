import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class Controller {
  repository = AppDataSource.getRepository(User);

  getAll = async (req, res) => {
    try {
      const entities = await this.repository.find();
      res.json(entities);
    } catch (err) {
      this.handleError(res, err);
    }
  };

  getOne = async (req, res) => {
    try {
      await this.repository.findOne(req.params.id);
    } catch (err) {
      this.handleError(res, err);
    }
  };

  create = async (req, res) => {
    try {
      //TODO
    } catch (err) {
      this.handleError(res, err);
    }
  };

  update = async (req, res) => {
    try {
      //TODO
    } catch (err) {
      this.handleError(res, err);
    }
  };

  delete = async (req, res) => {
    try {
      //TODO
    } catch (err) {
      this.handleError(res, err);
    }
  };

  handleError = (res, err, status = 500, message = 'Internal server error') => {
    if (err) {
      console.error(err);
    }
    res.status(status).json({ error: message });
  };
}
