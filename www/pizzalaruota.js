document.getElementById('spin-btn').addEventListener('click', function() {
  fetch('/api/random-pizza')
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerHTML = `
        <strong>${data.tipo}:</strong> ${data.pizza}<br>
        <em>Consigliata da ${data.consiglia}</em><br>
        <span style="color:#ff006e;">(${data.nick})</span>
      `;
    })
    .catch(() => {
      document.getElementById('result').innerHTML = "Errore nel caricamento della pizza! 😢";
    });
}); 