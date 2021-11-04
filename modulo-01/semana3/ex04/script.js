const addZero = (i) =>{
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  const liveTime = () => {
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
       setTimeout(()=> {
      liveTime()
    }, 1000);
  }
  liveTime();