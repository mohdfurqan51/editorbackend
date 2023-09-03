const mongoose = require('mongoose');
const dbUrl = `mongodb+srv://mohdfurqan:5TB0ihPiOl2os2yY@cluster0.mfse9nf.mongodb.net/imageeditor?retryWrites=true&w=majority`;

// asynchrounous function
// this function will return a promise

// const res = await mongoose.connect(dbUrl);

mongoose.connect(dbUrl)
.then((result) => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;
