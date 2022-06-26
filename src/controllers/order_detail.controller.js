import { orders, products, order_detail} from '../models'

class OrderDetailController {
    constructor() {
        this.model = order_detail;
        //this.user_id = req.current_user;
        this.user_id = 1;
    }

    async getAll (req, res) {
        try {
            const orderDetail = await this.model.findAll();
            return res.status(200).json(orderDetail);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
}
module.exports = OrderDetailController;