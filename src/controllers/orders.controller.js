import { orders, coupons, users, stores} from '../models'

class OrderController {
    constructor() {
        this.model = orders;
    }

    async getAll (req, res) {
        try {
            //const {id} = 1
            //const {id} = req.current_user;
            const order = await this.model.findAll();
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
}
module.exports = OrderController;