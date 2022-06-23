import { coupons } from '../models'

class CouponsController {
    constructor() {
        this.model = coupons;
    }

    async getAll (req, res) {
        try {
            const coupons = await this.model.findAll();
            return res.status(200).json(coupons);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

}
module.exports = CouponsController;