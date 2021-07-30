const key1 = document.querySelector('.key1')
const key2 = document.querySelector('.key2')
const key3 = document.querySelector('.key3')


window.addEventListener('keydown', (event) => {
  key1.innerText =  event.key === " " ? 'Space' : event.key
  key2.innerText = event.keyCode
  key3.innerText = event.code

})
