function elapsedTime(sa, st) {
    let sec = (new Date("0 " + st) - new Date("0 " + sa)) / 1000;
    if (sec < 0) sec = sec + 86400;
    let s = `${sec / 3600 | 0}:${(sec / 60 | 0) % 60}:${sec % 60}`.replace(/\b\d\b/g, "0$&");
    return s;
  }