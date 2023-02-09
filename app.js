const Koa = require("koa");
const logger = require('koa-logger')
const bodyParser = require("koa-bodyparser");
const registerRouter = require('./src/router')
const config = require('./src/config/base')
// const cors = require("@koa/cors")

// init
const app = new Koa();

// port default 3000
const port = config.port || 3000;

app.use(logger())
app.use(bodyParser());
// app.use(cors())

// register Routers
registerRouter(app)

// listen
app.listen(port, () => {
  console.log(`Starting at port ${port}`);
});
