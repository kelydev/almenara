import { stores, store_sections} from "../models";

class StoreController {

    constructor() {
        this.model = stores;
    }

    async getAll (req, res) {
        try {
            const store = await this.model.findAll({
                include: store_sections,
            });
            return res.status(200).json(store);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async getBySection (req, res) {
        const storeSectionId = parseInt(req.params.id)
        try {
            const store= await this.model.findAll({
                where: { store_section_id: storeSectionId }
            }
            );
            return res.status(200).json(store);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
}
module.exports = StoreController;