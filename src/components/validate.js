export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "UserName is required";
  } else {
    delete errors.name;
  }
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 character or more";
  } else {
    delete errors.email;
  }
  if (!data.confirmpassword) {
    errors.confirmpassword = "Confirm the password";
  } else if (data.confirmpassword !== data.password) {
    errors.confirmpassword = "password does not match";
  } else {
    delete errors.confirmpassword;
  }

  if (data.isaccepted) {
    delete errors.isaccepted;
  } else {
    errors.isaccepted = "Accept our regulations";
  }

  return errors;
};
