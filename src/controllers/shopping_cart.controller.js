import { shopping_cart } from '../models'

class ShoppingCartController {
    constructor() {
        this.model = shopping_cart;
    }

    async getAll (req, res) {
        try {
            const cart = await this.model.findAll();
            return res.status(200).json(cart);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

}
module.exports = ShoppingCartController;