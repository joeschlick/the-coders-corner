const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./api/auth");

router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
