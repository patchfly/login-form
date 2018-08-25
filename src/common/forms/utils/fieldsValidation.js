export const required = (value) => value ? undefined : 'This field is required';

export const validateEmail = (value) => {
  if (!value) return;
  const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))/.source +
    /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.source
  );
  return re.test(value) ? undefined : 'Invalid email address';
};

export const validatePassword = (value) => {
  if (!value) return;
  const re = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/);
  return re.test(value) ? undefined : 'Invalid password';
};
