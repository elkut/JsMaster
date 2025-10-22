document.querySelector('#check').addEventListener('click', checkDays)

function checkDays() {
  let day = document.querySelector('#day').value

  if (day.toLowerCase() === 'Monday' || day.toLowerCase() === 'Tuesday' ||
    day.toLowerCase() === 'Wednesday' || day.toLowerCase() === 'Tursday') {
    document.querySelector('#placeToSee').innerHTML = 'Boring Day'
  }
  else {
    document.getElementById('placeToSee').innerText = 'Fun day'
    document.getElementById('placeToSee').style.color = 'green'
  }
}