const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/routes/auth');
const generateRoutes = require('./src/routes/generate');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/code', generateRoutes);
app.use("*",(req,res)=>{
    res.send("Welcome  To APIs");
})
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
