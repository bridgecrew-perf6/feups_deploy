const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_UI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base conectada'))
    .catch(err => console.log(err));