import "./styles.css";

const heatWithTime = (timeMs) => {
  return new Promise((resolve, reject) => {
    if (isNaN(timeMs)) {
      reject("数値をして下さい");
    }
    setTimeout(() => {
      resolve();
    }, timeMs);
  });
};

const doTask = async () => {
  try {
    const resultA = await heatWithTime(10);
    console.log("10秒");
    const resultB = await heatWithTime(2000);
    console.log("２0秒");
  } catch (error) {
    console.log(error);
  }
};

doTask();
