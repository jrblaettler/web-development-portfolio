export const validateEmail = (email: string) => {
  if (!RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}').test(email)) {
    return 'Please enter a valid email (eg example@example.com)';
  }
};

export const validatePassword = (password: string) => {
  if (password.length < 20) {
    return 'Please enter a password thats at least 20 characters';
  } else if (password.length > 40) {
    return 'Please enter a password thats at most 40 characters';
  }
};
