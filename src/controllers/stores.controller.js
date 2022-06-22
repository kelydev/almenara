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

    /*async getById (req, res) {
        try {
            const id = parseInt(req.params.id)
            const product = await this.model.findByPk(id);
            if (!product) {
                throw boom.notFound('product not found');
            }
            if (product.isBlock) {
                throw boom.conflict('product is block');
            }
            return res.status(200).json(product);

        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async getByCategorys (req, res) {
        const category_ids = parseInt(req.params.id)
        try {
            const prod = await this.model.findAll({
                where: { category_id: category_ids }
            }
            );
            return res.status(200).json(prod);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }*/
}
module.exports = StoreController;