document.getElementById('button').addEventListener('click', input)
let age = 0
let day = ''

function input () {
  age = document.getElementById('age-input').value
  age = parseInt(age)
  day = document.getElementById('day-input').value

  if (age <= 18 && (day !== 'saturday' && day !== 'sunday')) {
    alert('Have Fun at School!')
  } else if (age > 18 && (day !== 'saturday' && day !== 'sunday')) {
    alert('Have Fun at Work!')
  }
  else {
    alert('Nice Weekend!')
  }
}
