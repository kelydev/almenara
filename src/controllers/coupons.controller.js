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

    async getSearch (req, res) {
        try {
            const { code } = req.body
            const coupon = await this.model.findAll({
                where : { code : code}
            });
            return res.status(200).json(coupon);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}
module.exports = CouponsController;