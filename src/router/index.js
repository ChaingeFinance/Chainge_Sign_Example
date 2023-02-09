const HomeRouters = require('../controllers/home/router')

const registerRouter = (app) => {
    app.use(HomeRouters.routes()).use(HomeRouters.allowedMethods());
}

module.exports = registerRouter