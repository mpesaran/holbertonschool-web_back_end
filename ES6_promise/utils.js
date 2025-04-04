export const uploadPhoto = () => {
    return new Promise((resolve, reject) => {
      resolve({ status: 200, body: 'photo-profile-1' });
    });
  };
  
  export const createUser = () => {
    return new Promise((resolve, reject) => {
      resolve({ firstName: 'Guillaume', lastName: 'Salva' });
    });
  };