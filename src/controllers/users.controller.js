import { users, roles } from "../models";

class UserController {
  constructor() {
    this.model = users;
  }

  async getAll(request, response) {
    try {
        const user = await this.model.findAll({
            include: roles,
        });
        return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = UserController;

