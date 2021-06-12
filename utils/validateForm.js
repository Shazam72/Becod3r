const validator = require("validator");
const db = require("../models");

let validateLogin = (reqBody) => {
  const { email, password, password_confirm, csrf } = reqBody;
  let isOk = true;
  let message = {};

  if (email == null || password == null || password_confirm == null) {
    isOk = false;
    message.general = `Données d'identification incomplètes`;
  } else {
    if (!validator.isEmail(email)) {
      isOk = false;
      message.email = `L'email entré est invalide`;
    }

    if (!validator.isStrongPassword(password)) {
      isOk = false;
      message.password = `Ulilisez des majuscules, miniscules, des lettres et des chiffres en au moins 8 caractères`;
    }

    if (password != password_confirm) {
      isOk = false;
      message.password_confirm = `Les mots de passe ne correspondent pas`;
    }
  }
  return { isOk, message };
};

let validateLogup = (reqBody) => {
  const { nom, prenom, email, password, password_confirm } = reqBody;
  let isOk = true;
  let message = {};

  if (
    email == null ||
    password == null ||
    password_confirm == null ||
    nom == null ||
    prenom == null
  ) {
    isOk = false;
    message.general = `Données d'identification incomplètes`;
  } else {
    if (!/[a-zA-Z0-9\-.éè]/.test(nom)) {
      isOk = false;
      message.nom = `Le nom est incorrect`;
    }
    if (!/[a-zA-Z0-9\-.éè]/.test(prenom)) {
      isOk = false;
      message.prenom = `Le nom est incorrect`;
    }
  }

  return { isOk, message };
};

exports.validateLogin = validateLogin;
exports.validateLogup = validateLogup;
