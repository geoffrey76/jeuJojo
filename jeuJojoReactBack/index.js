import express from 'express';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const app = express();
const port = 8800;
app.use (express.json());

dotenv.config();


// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

//---------------------------- Connect to DB -----------------------------
const uri = process.env.STRING_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err, db) => {
    console.log('connecté avec succès à DB');
    const bestScoreMemory1Player = db.db("jeuJojo").collection('memory1Player');
    if (err || !db) { return false; }
    //--------------------- Send best score + name to front (memory 1 player) ------------------------
    app.get('/api/getBestScore', async (req, res) => {
      const response = await bestScoreMemory1Player.find({}).toArray();
      res.json(response);
      console.log(response);
    });
    //-------------------- Retrieve new best score + name from front (memory 1 player) and set in DB-------------------
    app.post('/api/newBestScore', async (req, res) => {
      const bestScore = req.body;
      console.log (bestScore);
      bestScoreMemory1Player.replaceOne({},bestScore);
    })
});


//---------------------------- Send mail contact ------------------------
app.post('/api/mailForm', async (req, res) => {
  console.log(req.body)
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const comments = req.body.comments;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.GOOGLE_PASS
    }
  });
  
  var mailOptions = {
    from: process.env.USER_MAIL,
    to: process.env.USER_MAIL,
    subject: 'Mail form from Jeu de Jojo site',
    text:
    `Prénom: ${firstName}

Nom: ${lastName}

email: ${email}

comments: ${comments}`
  };
  console.log(mailOptions)
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send("Erreur lors de l'envoi du message");
    } else {
      console.log('Email sent: ' + info.response);
      res.send("Message bien envoyé. Merci.");
    }
    
  });
  
})


