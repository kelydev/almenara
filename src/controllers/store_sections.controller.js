import { store_sections } from '../models'

class StoreSectionsController {
    constructor() {
        this.model = store_sections;
    }

    async getAll (req, res) {
        try {
            const store_section = await this.model.findAll();
            return res.status(200).json(store_section);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    } 
}
module.exports = StoreSectionsController;