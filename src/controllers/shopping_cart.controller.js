import { shopping_cart, products } from '../models'

class ShoppingCartController {
    constructor() {
        this.model = shopping_cart;
    }

    async getAll (req, res) {
        try {
            //const {id} = 1
            //const {id} = req.current_user;
            const cart = await this.model.findAll({
                include: [{
                    model: products,
                }],
                atributes: {
                    exclude:"user_id",
                },
                where: {
                    user_id: 1,
                },
            });
            return res.status(200).json(cart);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async addProduct (req, res) {
        try {
            let {id,quantity,price} = req.body;
            const add_product = await this.model.create({
                user_id:1,
                product_id:id,
                quantity: quantity,
                price: price,
              });
            return res.status(200).json(add_product);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async updateProduct (req, res) {
        try {
            const id = parseInt(req.params.id)
            const update_product = await this.model.update(
                {
                    user_id:1,
                    product_id:2,
                    quantity: 100,
                    price: 50.5
                },
                {where: { id: id }}
            );
            return res.status(200).json(update_product);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async deleteProduct (req, res) {
        try {
            const id = parseInt(req.params.id)
            const delete_product = await this.model.destroy({
                where: { id: id }
            });
            return res.status(200).json(delete_product);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
}
module.exports = ShoppingCartController;