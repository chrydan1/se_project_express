const router = require("express").Router();

const clothingItemRouter = require("./clothingitem");
const usersRouter = require("./users");
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");

router.post("/signin", login);
router.post("/signup", createUser);
router.get("/items", require("../controllers/clothingitem").getItems);

router.use(auth);

router.use("/items", clothingItemRouter);
router.use("/users", usersRouter);

module.exports = router;