const express = require('express');
const bodyParser = require('body-parser');
const bookingRouter = require('./routes/booking');
const homeRouter = require('./routes/home')
const sequelize = require('./utls/database')
const cors = require('cors')




const app = express();
app.use(cors())
app.use(bodyParser.json());


app.use("/bookings",bookingRouter);
app.use('/',homeRouter);
// Create Booking table if not exists
sequelize.sync().then(()=>{
    app.listen(3000, () => {
        console.log('Server started on port 3000');
      });
      
});

