function getTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();

  const setFormat = (time) => {
    return time.toString().padStart(2, "0");
  };

  const clock = `${setFormat(hour)}:${setFormat(minutes)}:${setFormat(
    seconds
  )}`;

  return clock;
}

export default getTime;
