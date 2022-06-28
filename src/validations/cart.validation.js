import {body} from 'express-validator'

const cartAddProductSchema = [
    body("quantity").isInt({min:1})
]

export {cartAddProductSchema}
