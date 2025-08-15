const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

let user = { name: "Default User", age: 20 };


app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Home Page",
        query: req.query
    });
});


app.get('/about', (req, res) => {
    res.json({ message: "Hello from About page" });
});


app.get('/contact', (req, res) => {
    res.json({ message: "Hello from Contact page" });
});

//  Get current user
app.get('/user', (req, res) => {
    if (!user.name) {
        return res.status(404).json({ error: "No user found" });
    }
    res.json({ user });
});


//creating new user
app.post('/user', (req, res) => {
    const { name, age } = req.body; // Extract data from request
    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required" });
    }
    res.send(`Hello ${name}, you are ${age} years old!`);
});



//  Replace entire user
app.put('/user', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required" });
    }
    res.send(`Hello ${name}, you are ${age} years old!`);
   
});

//  Update part of the user
app.patch('/user', (req, res) => {
    const { name, age } = req.body;
    if (!name && !age) {
        return res.status(400).json({ error: "At least one field is required" });
    }
    if (name) user.name = name;
    if (age) user.age = age;
    res.json({ message: "User updated", user });
});

//  Delete user
app.delete('/user', (req, res) => {
    user = {};
    res.json({ message: "User deleted", user });
});

// Start server
app.listen(5200, () => console.log(" Server running on port 5200"));
