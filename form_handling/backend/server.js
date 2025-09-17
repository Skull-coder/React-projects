import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Form_handling', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("MongoDb connected"))
.catch(()=> console.log("Got error"))

const userSchema = new mongoose.Schema({
  Name: String,
  number: String,
  emailId: String,
});

const User = mongoose.model('UserData', userSchema);

app.post('/submit', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'i am server.js' });  
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: 'Failed to save data' });      
    }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

