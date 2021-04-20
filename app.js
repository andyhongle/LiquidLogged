const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const path = require('path');
const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const liquids = require("./routes/api/liquids");
const passport = require('passport');


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/users", users);
app.use("/api/liquids", liquids);
