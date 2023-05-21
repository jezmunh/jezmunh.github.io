let currenttime_dom = document.getElementById('current_time')
let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

setInterval(function(){
    let datetime = new Date()
    let hour = datetime.getHours()
    let minutes = datetime.getMinutes().toString().length < 2 ? '0' + datetime.getMinutes() : datetime.getMinutes();

    currenttime_dom.innerHTML = days[datetime.getDay()]+ ' '+hour + ':' + minutes
}, 1000)