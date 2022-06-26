import { orders, coupons, users, stores, shopping_cart, order_detail, products} from '../models'

class OrderController {
    constructor() {
        this.model = orders;
        this.modelo = shopping_cart;
        //this.user_id = req.current_user;
        this.user_id = 1;
        this.igv = 0.18;
    }

    async getAll (req, res) {
        try {
            const order = await this.model.findAll();
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async createOrder (req, res) {
        try {
            const shopping = await this.getProductsToShoppingCart();
            //let {id, user_id, coupon_id, date_creation, date_delivery, subtotal_price, amount_igv, payment, operation_code, status} = req.body;
            let { user_id, coupon_id, store_id, date_creation, date_delivery} = req.body;
            const orderr = await this.model.create(
                {   id:4,
                    user_id:user_id,
                    store_id:store_id,
                    coupon_id:coupon_id,
                    date_creation: date_creation,
                    date_delivery: date_delivery,
                    subtotal_price:shopping.subtotal,
                    total_price:89,
                    amount_igv:14,
                    payment:'mercado',
                    operation_code: 98765,
                    status: true
                }
            );
            return res.status(200).json(orderr);
        } catch (error) {
            return res.json({
                message: error.message,
            });        
        }
    }

    async getProductsToShoppingCart (req, res) {
        try {
            const records = await this.modelo.findAll({
                include: [{
                    model: products,
                }],
                where: {user_id: this.user_id,}
            });

            if(records)
            {
                let total = 0;

                for (let i = 0 ; i < records.length; i++) {
                    total += records[i].product.price * records[i].quantity
                }

                let subtotal = total - (total * this.igv)
                let igv = total * this.igv

                return ({
                    items:records,
                    'total': total,
                    'subtotal': subtotal,
                    'igv': igv,
                });
            }
            return ({message:'El carrito esta vacio'});
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
    
    async cleanShoppingCart (req, res) {
        try {
            await this.modelo.delete({
                where: {user_id: this.user_id}
            });
        } catch (error) {
            return ({message: error.message,});        
        }
    }
}
module.exports = OrderController;