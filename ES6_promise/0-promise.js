export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve('Data fetched successfully');
      }
      // else {
      //   reject('Error fetching data');
      // }
    }, 10);
  });
}
