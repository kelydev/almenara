import { shopping_cart, products } from '../models'

class ShoppingCartController {
    constructor() {
        this.model = shopping_cart;
        this.igv = 0.18;
    }
    
    async getShoppingCartCustomer (req, res) {
        try {
            const {id} = req.current_user;
            console.log(req.current_user);
            const records = await this.model.findAll({
                include: [{
                    model: products,
                }],
                atributes: {
                    exclude:"user_id",
                },
                where: {
                    user_id: id,
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
            const {id} = req.current_user;

            const product = await products.findByPk(data.product_id);

            if (!product) {
                if (!product) {
                    return res.status().json({
                        message: "Product not Found",
                    })
                }
            }

            const record = await this.model.findOne({
                where: {
                    user_id: id,
                    product_id: data.product_id,
                }
            });

            if(record)
            {
                record.quantity = data.quantity;
                record.price = product.price;
                await record.save();
                return res.status(200).json(record);
            }
            else 
            {
               const add_product = await this.model.create(
                {
                    user_id: id,
                    product_id: data.product_id,
                    quantity: data.quantity,
                    price: product.price
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
            const {id} = req.current_user;
            const product_id= parseInt(req.params.id)
            const record = await this.model.destroy({
                where: {
                    user_id: id,
                    product_id: product_id,
                }
            });

            if(record)
            {
                return res.status(200).json({message:`Producto ${product_id} eliminado`});
            }
            return res.status(404).json({message:"Producto no encontrado"});
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });        
        }
    }
}
module.exports = ShoppingCartController;