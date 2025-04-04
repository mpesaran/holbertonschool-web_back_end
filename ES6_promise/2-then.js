export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ body: 'Success', status: 200 });
    } else {
      reject(new Error(''));
    }
    console.log('Got a response from the API');
  });
}
