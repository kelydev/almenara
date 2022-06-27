import { categories } from '../models'

class CategoryController {
    constructor() {
        this.model = categories;
    }

    async getAll (req, res) {
        try {
            const category = await this.model.findAll();
            return res.status(200).json(category);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    } 
}
module.exports = CategoryController;