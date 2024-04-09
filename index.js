const restify = require('restify')
const dotenv = require('dotenv')
dotenv.config()
const {db} = require('./models/index')
// require('./models/index.js')
const userRoute = require('./routes/user.routes')
const productRoute = require('./routes/product.route')


const server= restify.createServer({handleUncaughtExceptions: true}
)

//middleware
server.use(restify.plugins.authorizationParser())
server.use(restify.plugins.jsonBodyParser());
server.use(restify.plugins.dateParser())
server.use(restify.plugins.queryParser())


//routes
userRoute.applyRoutes(server, '/v1/user')
productRoute.applyRoutes(server, '/v1/product')


server.on('uncaughtException', (req, res, route, err) => {
    console.error('Unhandled error caught:', err);
    res.status(500);
    res.send('Internal Server Error');
 });

const PORT = process.env.PORT||3000

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

