export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ body: 'success', status: 200 });
    } else {
      reject(Error(''));
    }
    console.log('Got a response from the API');
  });
}
