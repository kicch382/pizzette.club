const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const PORT = 3000;

app.use(express.static('.'));

app.get('/api/random-pizza', (req, res) => {
  const results = [];
  fs.createReadStream('WE WANT YOUR PIZZA(S) (Risposte) - Risposte del modulo 1.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const columns = [
        "La tua pizza prefe",
        "La tua pizza schiferita",
        "Una pizza che ti sei inventatə"
      ];
      const randomRow = results[Math.floor(Math.random() * results.length)];
      const randomCol = columns[Math.floor(Math.random() * columns.length)];
      res.json({
        tipo: randomCol,
        pizza: randomRow[randomCol],
        consiglia: randomRow["Consiglia da ..."],
        nick: randomRow["Il tuo nick sul pizzord"]
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
}); 