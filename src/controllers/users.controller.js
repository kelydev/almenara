import { users, roles } from "../models";

class UserController {
    constructor() {
      this.model = users;
    }
  
    async getAll(req, res) {
        try {
            const user = await this.model.findAll({
                attributes:{
                    exclude: ['password'],
                },
                order: [["id", "ASC"]],
                include: roles,
            });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}
module.exports = UserController;