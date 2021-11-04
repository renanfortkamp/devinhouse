const addZero = (i) =>{
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  const liveTime = () => {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
       setTimeout(()=> {
      liveTime()
    }, 1000);
  }
  liveTime();
