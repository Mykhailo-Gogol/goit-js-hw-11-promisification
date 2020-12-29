const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const logSuccess = ({ id, amount: time }) => {
  console.log(`%cTransaction ${id} processed in ${time}ms`, "color:green");
};

const logError = ({ id }) => {
  console.log(
    `%cError processing transaction ${id}. Please try again later.`,
    "color:red"
  );
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(4000, 5000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve(transaction);
      }
      reject(transaction);
    }, delay);
  });
};

/*
 * Работает так
 */

//makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

/*
 * Должно работать так
 */

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
