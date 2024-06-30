const express = require('express');
const cors = require('cors');
const dbconnect = require('./config');
const app = express();



app.use(express.json());
app.use(cors({origin: '*'}));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/employees', require('./routes/employeeRoutes'));
app.listen(3005, () => {
    console.log('El servidor está en el puerto 3005');
});

dbconnect();