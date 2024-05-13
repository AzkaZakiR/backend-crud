const { User } = require("../models");
const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { name, username, password, confirmPassword, role, storeId } =
      req.body;

    // Req body validation
    if (
      !name ||
      !username ||
      !password ||
      !confirmPassword ||
      !role ||
      !storeId
    ) {
      return next(
        new ApiError(
          "name, username, password, confirmPassword, role, storeId field is required",
          400
        )
      );
    }

    // Check unique username
    const isUsernameExist = await User.findOne({
      where: {
        username,
      },
    });
    if (isUsernameExist) {
      return next(new ApiError("Username is already taken", 400));
    }

    // Check password length
    if (password.length <= 8) {
      return next(new ApiError("Password should be 8 character or more", 400));
    }

    // Check password & passwordConfirm
    if (password !== confirmPassword) {
      return next(
        new ApiError("password & confirmPassword does not match", 400)
      );
    }

    // Check req.body role
    const roles = ["Manager", "Staff"];
    if (!roles.includes(role)) {
      return next(new ApiError("Role should be Manager or staff", 400));
    }

    // Encrypt
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    await User.create({
      name,
      username,
      password: hashedPassword,
      role,
      storeId,
    });

    res.status(201).json({
      status: "Success",
      message: "User successfully registered",
      requestAt: req.requestTime,
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          name: user.name,
          role: user.role,
          storeId: user.storeId,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES,
        }
      );

      res.status(200).json({
        status: "Success",
        message: "User successfully logged in",
        requestAt: req.requestTime,
        data: { token },
      });
    } else {
      return next(new ApiError("Wrong Email Or Password", 400));
    }
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

const checkUser = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "User data successfully retrieved",
      requestAt: req.requestTime,
      data: {
        user: req.user,
      },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

module.exports = {
  register,
  login,
  checkUser,
};
