export const validateEmail = (email: string) => {
  if (!RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}').test(email)) {
    return 'Please enter a valid email (eg example@example.com)';
  }
};

export const validatePassword = (password: string) => {
  if (password.length <= 20) {
    return 'Please enter a password thats at least 20 characters';
  } else if (password.length >= 40) {
    return 'Please enter a password thats at most 40 characters';
  }
};

export const validateName = (name: string) => {
  if (!RegExp("^[a-z-']").test(name)) {
    return 'Please enter only alphabetic characters';
  } else if (!name.length) {
    return 'Please enter your name';
  } else if (name.length >= 50) {
    return 'Please enter a name thats at most 50 characters';
  }
};
