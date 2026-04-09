const router = require("express").Router();
const { validateUser, validateLogin  } = require("../middlewares/validation");

const clothingItemRouter = require("./clothingitem");
const usersRouter = require("./users");
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");

router.post("/signin", validateLogin, login);
router.post("/signup", validateUser, createUser);
router.get("/items", require("../controllers/clothingitem").getItems);

router.use(auth);

router.use("/items", clothingItemRouter);
router.use("/users", usersRouter);

module.exports = router;