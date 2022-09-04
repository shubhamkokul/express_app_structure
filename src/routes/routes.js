const express = require("express");
const { handleRootGet, handleInviteRoute } = require("../services/rootService");
const router = express.Router();

router
    .route("/")
    .get((req, res) => handleRootGet(req, res));

router
    .route("/invite")
    .get((req, res) => handleInviteRoute(req, res));

module.exports = router;