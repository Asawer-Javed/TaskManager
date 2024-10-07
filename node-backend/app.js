const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const categoryRoutes = require('./routes/categories');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/categories', categoryRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});