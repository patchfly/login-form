const login = (email, password) => {
  return new Promise((resolve, reject) => {
    if (email !== 'test@test.pl' || password !== 'Password1') {
      const error = 'Invalid email or password';
      reject(error);
    } else {
      const token = 'token';
      resolve({token: token});
    }
  });
};

export default {
  login
};
