import './x'
import './style.scss'
import './y.less'
import './a.styl'
import png from './assets/1.png'
console.log(png)

const div = document.getElementById('app')
div.innerHTML = `
<div>
<img src="${png}">
</div>
`
const button = document.createElement("button")
button.innerText = '懒加载'

div.appendChild(button)

button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
    button.onclick = () => { '' }
}