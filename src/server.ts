import express from 'express';
import path from 'path';

const app = express();

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});
