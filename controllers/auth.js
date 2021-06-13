const { validateLogin, validateLogup } = require("../utils/validateForm");
const models = require("../models");
const bcrypt = require("bcrypt");
const { authToken } = require("../utils/token");

module.exports = {
  sign: async (req, res, next) => {
    let isOk = validateLogin(req.body);

    if (!isOk.isOk) {
      res.status(500).json(isOk.message);
    } else {
      const { email, password } = req.body;
      models.User.findOne({
        attributes: ["email","password"],
        where: { email: email },
      })
        .then((userFound) => {
          if (userFound) {
            bcrypt.compare(
              password,
              userFound.password,
              (errBcrypt, resBcrypt) => {
                if (resBcrypt) {
                    req.session.authenticated=true
                  res.status(200).json({
                    token: authToken(userFound),
                    auth:req.session.authenticated
                  });
                } else res.status(403).json({ error: "Invalid password" });
              }
            );
          } else res.status(404).json({ error: "User doesn't exist" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  register: async (req, res, next) => {
    let isOk = validateLogup(req.body);

    if (!isOk.isOk) {
      res.status(500).json(isOk.message);
    } else {
      const { nom, prenom, email, password, password_confirm } = req.body;
      models.User.findOne({
        attributes: ["email"],
        where: { email: email },
      })
        .then((userFound) => {
          if (!userFound) {
            bcrypt.hash(password, 10, (err, passwordHashed) => {
              let user = models.User.create({
                email: email,
                nom: nom,
                prenom: prenom,
                password: passwordHashed,
              }).then((user) => {
                res.status(200).json({ 
                  userEmail: user.email,
                  registred: true});
              });
            });
          } else res.status(409).json({ error: "User already exist" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  verifyAuth:(req,res,next)=>{
   res.status(200).json({
    authenticated:req.session.authenticated
   })
  }
};
