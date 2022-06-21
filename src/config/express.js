import express from 'express';
import morgan from 'morgan';

import rolesRoutes from "../routes/roles.routes";
import usersRoutes from "../routes/users.routes";
import authRoutes from "../routes/auth.routes";
import categoriesRoutes from "../routes/categories.routes";
import productsRoutes from "../routes/products.routes";
import shoppingCartRoutes from '../routes/shopping_cart.routes';
const app = express();

app.use(morgan(process.env.NODE_LOG || 'dev'));
app.use(express.json());


app.use("/roles", rolesRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/shoppingCart", shoppingCartRoutes);

export default app;