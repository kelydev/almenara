import express from 'express';
import morgan from 'morgan';

import rolesRoutes from "../routes/roles.routes";
import usersRoutes from "../routes/users.routes";
import authRoutes from "../routes/auth.routes";

const app = express();

app.use(morgan(process.env.NODE_LOG || 'dev'));
app.use(express.json());


app.use("/roles", rolesRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);

export default app;