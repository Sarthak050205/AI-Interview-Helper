const { Router } = require("express")
const { registerUserController, loginUserController, logoutUserController, getMeController } = require("../controllers/auth.controller.js")
const authMiddleware = require("../middlewares/auth.middleware.js")
const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", registerUserController)
/**
 * @route POST /api/auth/login
 * @description Login a user with email and password, returns a JWT token
 * @access Public
 */
authRouter.post("/login", loginUserController)  
/**
 * @route GET /api/auth/logout
 * @description clear token from user's cookies and add it to blacklistTokens
 * @access Public
 */
authRouter.get("/logout", logoutUserController)
/**
 * @route GET /api/auth/get-me
 * @description Get the logged in user's details, requires authentication
 * @access Private
 */
authRouter.get("/get-me", authMiddleware.authUser, getMeController)
module.exports = authRouter
