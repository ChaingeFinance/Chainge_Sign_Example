const HomeController = require('./index')

const Router = require("koa-router");
const router = new Router();

router.post("/getSign", async (ctx) => HomeController.getSign(ctx));

module.exports = router