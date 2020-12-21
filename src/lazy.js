export default function () {
    const div = document.createElement('div')
    const webpack = document.getElementById('webpack')
    div.innerText = '我是懒加载文件'
    webpack.appendChild(div)
    console.log('我是懒加载文件')
}