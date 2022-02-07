function somar() {
  var tn1 = document.getElementById('txtn1')
  var tn2 = document.getElementById('txtn2')
  var total = document.getElementById('totalx')
  var soma = document.getElementById('total')

  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var total = n1 + n2
  soma.innerText = `O total da soma ${n1} + ${n2} = ${total}`
}
