const express = require('express')

const PORT=3000

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from server"})
})

app.listen(3000, () => {
    console.log(`Server listening on ${PORT}`);
});

