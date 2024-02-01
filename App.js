const express = require('express'); //เรียกใช้ express ผ่าน require
const port = 3000; //พอร์ตของ Server ที่ใช้ในการเปิด Localhost 

const devMode = process.env.NODE_ENV === 'development'
const path = require('path')
const cors = require('cors')

//const redisClient = require('./cores/config/redis')

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.success({ message: 'It works!' }))

var autoRoutes = require('express-auto-routes')(app); 
autoRoutes(path.join(__dirname, './routes')); 

var trdRouter = require('./routes/api/trd');
app.use('/trd/', trdRouter);

module.exports = app

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});