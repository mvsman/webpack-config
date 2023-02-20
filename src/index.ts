import './style.css'
import printFunc from './print'

function component(): HTMLDivElement {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.textContent = 'beautiful button'

  btn.style.marginLeft = '1rem'
  btn.textContent = 'Click me!'
  btn.onclick = printFunc

  element.append(btn)

  return element
}

document.body.append(component())
