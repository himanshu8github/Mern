const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
app.use(express.json());

app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users" , (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
   console.log(body);
    return res.json({status:"success" , id: users.length+1})
    });
    
})

const saveUsers = (res, data, successMsg) => {
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data, null, 2), err => {
        if (err) return res.status(500).json({ error: "Failed to save data" });
        res.json({ status: "success", message: successMsg });
    });
};


app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    if (!body.first_name || !body.last_name || !body.email || !body.gender ) {
        return res.status(400).json({ error: "All fields are required for PUT" });
    }

    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ error: "User not found" });

    Object.assign(user, { id, ...body });
    saveUsers(res, users, "User replaced successfully");
});

app.patch("/api/users/:id" , (req, res) => {
    return res.json({status:"pending"})
})


app.delete("/api/users/:id" , (req, res) => {
    return res.json({status:"pending"})
});

app.listen(5100, () => {
    console.log("server started on 5100")
})