import { products, categories } from "../models";

class ProductController {

    constructor() {
        this.model = products;
    }

    async getAll (req, res) {
        try {
            const productss = await this.model.findAll({
                include: categories,
            });
            return res.status(200).json(productss);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async getById (req, res) {
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
    }

    async getByName (req, res) {
        try {
            const { name } = req.body;
            const productsName = await this.model.findAll({
                where: { name: name },
            });
            return res.status(200).json(productsName);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async getByPriceHigher (req, res) {
        try {
            const productHigher = await this.model.findAll({
                order: [
                    ['price', 'DESC'],
                ],
            });
            return res.status(200).json(productHigher);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async getByPriceLower (req, res) {
        try {
            const productLower = await this.model.findAll({
                order: [
                    ['price', 'ASC'],
                ],
            });
            return res.status(200).json(productLower);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

}
module.exports = ProductController;