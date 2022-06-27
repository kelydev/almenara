import { users } from "../models";
import { BaseException } from "../exceptions/expressException";
import { jwtSignIn, jwtVerify } from "../helpers/jwt";

class AuthController {
    constructor() {
        this.model = users;
    }

    async signUp(req, res) { 
        try {
            const { name,last_name, email, password } = req.body;
            const record = this.model.build({
                role_id: 2,
                name,
                email,
                password,
                last_name,
                status: true
            });
            await record.hashPassword();
            await record.save();
            return res.status(201).json(record);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async signIn(req, res) {
        try {
        const { email, password } = req.body;

        const user = await this.model.findOne({
            where: {
                email,
            },
        });
        if (!user) throw new BaseException("User not found");
            const validatePassword = await user.validatePassword(password);
        if (!validatePassword) throw new BaseException("Password is incorrect");

        const authToken = jwtSignIn({ user });
        return res.status(200).json({
            access_token: authToken.accessToken,
            refresh_token: authToken.refreshToken,
        });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async refreshToken(req, res) {
        try {
            const { refresh_token } = request.body;
            const payload = jwtVerify(refresh_token);
            const authToken = jwtSignIn({ user: payload.user });
        return res.status(200).json({
            access_token: authToken.accessToken,
        });
    } catch (error) {
        console.error(error.message);
        return res.send(403).json({
            message: "AccessToken Wrong or Expire",
        });
    }
  }
}

module.exports = AuthController;