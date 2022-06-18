import { roles } from '../models'

class RolController {
    constructor() {
        this.model = roles;
    }

    async getAll (req, res) {
        try {
            const rol = await this.model.findAll();
            return res.status(200).json(rol);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

}
module.exports = RolController;
  
