import express from 'express';
import cors from 'cors';
// rest of the code remains same
const app = express();
app.use(cors());
const PORT = 8000;

let count = 0;

app.get('/test', (req, res) => {
    count++;
    res.send(`Express ${count}`)
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});