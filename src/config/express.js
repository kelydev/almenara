import express from 'express';
import morgan from 'morgan';

import rolesRoutes from "../routes/roles.routes";
import usersRoutes from "../routes/users.routes";
import authRoutes from "../routes/auth.routes";
import categoriesRoutes from "../routes/categories.routes";
import productsRoutes from "../routes/products.routes";
import shoppingCartRoutes from '../routes/shopping_cart.routes';
import storeRoutes from '../routes/store.routes';
import couponsRoutes from '../routes/coupons.router';

const app = express();

app.use(morgan(process.env.NODE_LOG || 'dev'));
app.use(express.json());


app.use("/roles", rolesRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/shoppingCart", shoppingCartRoutes);
app.use("/storeSection", storeSectionRoutes);
app.use("/store", storeRoutes);
app.use("/coupons", couponsRoutes);

export default app;