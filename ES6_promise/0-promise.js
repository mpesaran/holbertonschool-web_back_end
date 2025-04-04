export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject(new Error('Error fetching data'));
      }
    }, 10);
  });
}
