function validation(userData, errors, setErrors) {
  if (!userData.username) {
    setErrors((errors) => ({
      ...errors,
      username: "Completa este Campo",
    }));
  } else if (userData.username.length > 30) {
    setErrors((errors) => ({
      ...errors,
      username: "No puede superar los 30 caracteres",
    }));
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors((errors) => ({ ...errors, username: "Email Invalido" }));
  } else {
    setErrors((errors) => ({ ...errors, username: " " }));
  }

  if (!userData.password) {
    setErrors((errors) => ({
      ...errors,
      password: "Completa este Campo",
    }));
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors((errors) => ({
      ...errors,
      password: "Password Invalida",
    }));
  } else if (!/\d/.test(userData.password)) {
    setErrors((errors) => ({
      ...errors,
      password: "Debe contener un número",
    }));
  } else {
    setErrors((errors) => ({ ...errors, password: " " }));
  }
}

export default validation;
