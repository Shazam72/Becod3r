const validator = require("validator");
validator.isGoodName = (name) => {
  return /[a-zA-Z0-9\-.éè]/.test(name);
};
const db=require('../models')

module.exports = {
  validateLogin: (reqBody) => {
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

    if(isOk===true){

    } else
      return { isOk, message };
  },

  validateLogup: (reqBody) => {
    const {nom,prenom,email,password,password_confirm}=reqBody
    let {isOk, message} = this.validateLogin(reqBody);
    if (isOk) {
      if (nom == null || prenom == null) {
        isOk = false;
        message.general = `Données d'identification incomplètes`;
      } else {
        if (!validator.isGoodName(nom)){
          isOk = false;
          message.nom = `Le nom est incorrect`;
        }
        if (!validator.isGoodName(prenom)){
          isOk = false;
          message.prenom = `Le nom est incorrect`;
        }
      }
    }

    if(isOk===true){

      console.log(db.sequelize.User.get);
      // db.sequelize.User.create({
      //   email,
      //   nom,
      //   prenom,
      //   password,
      //   roleId:1,
      // })
    } else
      return { isOk, message };
  },
};
