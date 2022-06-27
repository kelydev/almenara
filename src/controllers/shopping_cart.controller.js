import { shopping_cart, products } from '../models'

class ShoppingCartController {
    constructor() {
        this.model = shopping_cart;
        this.igv = 0.18;
        //this.user_id = req.current_user;
        this.user_id = 1;
    }
    
    async getShoppingCartCustomer (req, res) {
        try {
            console.log(req.current_user);
            const records = await this.model.findAll({
                include: [{
                    model: products,
                }],
                atributes: {
                    exclude:"user_id",
                },
                where: {
                    user_id: this.user_id,
                }
            });
    
            if(records)
            {
                let total = 0;

                for (let i = 0 ; i < records.length; i++) {
                    total += records[i].product.price * records[i].quantity
                }

                let subtotal = total - (total * this.igv)
                let igv = total * this.igv

                return res.status(200).json({
                    items:records,
                    prices:{
                        'total': total,
                        'subtotal': subtotal,
                        'igv': igv,
                    }
                });
            }
            return res.status(200).json({
                items:[],
                prices:{
                    'total': 0,
                    'subtotal': 0,
                    'igv': 0
                }
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }

    async addProduct (req, res) {
        try {
            let data = req.body;
           
            const record = await this.model.findAll({
                where: {
                    user_id: this.user_id,
                    product_id: data.product_id,
                }
            });

            if(record.length != 0)
            {
                const update_product = await record[0].update(
                {
                    user_id:1,
                     ...data
                });
                return res.status(200).json(update_product);
            }else {
               const add_product = await this.model.create(
                {
                    user_id: 1,
                    ...data
                });
                return res.status(200).json(add_product);
            }
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
    
    async deleteProduct (req, res) {
        try {
            const id = parseInt(req.params.id)
            const record = await this.model.destroy({
                where: {
                    user_id: this.user_id,
                    product_id: id,
                }
            });

            if(record)
            {

                return res.status(200).json({message:`Producto ${id} eliminado`});
            }
            return res.status(400).json({message:"Producto no encontrado"});
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
}
module.exports = ShoppingCartController;