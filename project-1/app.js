// const panels = document.getElementsByClassName('.panel')
const panels = document.querySelectorAll('.panel')

console.log(panels)

panels.forEach((p) => {
  p.addEventListener('click', () => {
    removeActive()
    p.classList.add('active')
  })
})

const removeActive = () => {
  panels.forEach((p) => {
    p.classList.remove('active')
  })
}
