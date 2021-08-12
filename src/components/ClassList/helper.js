export function msToHuman(ms) {
    ms = new Date(ms)
    let hours = ms.getHours();
    let min = ms.getMinutes();
    if(hours < 10)
      hours = "0" + hours;
    if(min < 10)
      min = "0" + min;
    return hours + ":" + min;
}