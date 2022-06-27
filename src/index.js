import 'dotenv/config';
import app from './config/express'

const port = process.env.PORT || 8000;

const main = async () => {
    app.listen(port, () => {
        console.log(`Express Runnig .. ${port}`);
    });
};

main();