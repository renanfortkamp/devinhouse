const liveTime = () => {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    document.getElementById('time').innerHTML = h + ":" + m;
  }
  liveTime();
