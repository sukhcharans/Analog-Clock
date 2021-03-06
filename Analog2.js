function getTime(){
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const secs = currentDate.getSeconds();
    const secFraction = secs/60;
    const minFraction = (secFraction+mins)/60;
    const hourFraction = (minFraction+hours)/12;
    const secRotate = secFraction*360;
    const minRotate = minFraction*360;
    const hourRotate = hourFraction*360;
    document.querySelector('.second').style.transform = `rotate(${secRotate}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minRotate}deg)`;
    document.querySelector('.hour').style.transform = `rotate(${hourRotate}deg)`;
}
setInterval(getTime, 1000);
