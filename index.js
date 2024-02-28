let hr = document.getElementById("hr")
let min = document.getElementById("min")
let sec = document.getElementById("sec")


setInterval(() => {
  let currentTime = new Date()
  min.innerHTML = currentTime.getMinutes()
  hr.innerHTML = currentTime.getHours()
  sec.innerHTML = currentTime.getSeconds()
}, 1000)

