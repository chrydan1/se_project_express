const router = require("express").Router();
const {
  validateClothingItem,
  validateItemId,
} = require("../middlewares/validation");

const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingitem");

router.get("/", getItems);
router.post("/", validateClothingItem, createItem);
router.put("/:itemId", validateItemId, validateClothingItem, updateItem);
router.delete("/:itemId", validateItemId, deleteItem);
router.put("/:itemId/likes", validateItemId, likeItem);
router.delete("/:itemId/likes", validateItemId, dislikeItem);

module.exports = router;
