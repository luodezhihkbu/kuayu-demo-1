// const request = new XMLHttpRequest()
// request.open('GET', 'http://qq.com:8888/friends.json')
// request.onreadystatechange = () => {
//     if(request.readyState === 4 && request.status === 200) {
//         console.log(request.response)
//     }
// }
// request.send()
// 同源策略

const random = Math.random()
window[random] = (data) => {
    console.log(data)
}
// 声明一个随机生成的函数来获取数据，这其实就是回调。
const script = document.createElement('script')
script.src = `http://qq.com:8888/friends.js?callback=${random}`
// ？后面是随机生成的查询字符串
document.body.appendChild(script)
script.onload = () => {
    script.remove();
  };
// script加载成功后再删掉
