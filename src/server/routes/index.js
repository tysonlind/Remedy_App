import express from "express";
import { restart } from "nodemon";
import controller from "../controllers/controller.js";

const router = express.Router();
//receives postData object, returns only status
router.post("/add-remedy", async (req, res, next) => {
  try {
    let { body } = req;
    controller.addRemedy(body);
    res.status(200);
    res.end();
  } catch (e) {
    res.status(500);
    res.send(e);
    next(e);
  }
});
//interacts with getRemedies on the front end to query the DB for entries that include the url parameter passed here
//returns JSON object to front-end
router.get("/:AffectedOrgans", async (req, res, next) => {
  try {
    let { AffectedOrgans } = req.params;
    let data = await controller.findOrgan(AffectedOrgans);
    res.json(data);
    res.status(200);
  } catch (e) {
    res.status(500);
    next(e);
  }
});
//returns a single DB entry (JSON Object) based on ID
router.get("/remedy/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data = await controller.findRemedy(id);
    res.json(data);
  } catch (e) {
    next(e);
  }
});
//takes ID (Number), no return
router.delete("/delete-remedy", async (req, res, next) => {
  try {
    let { body } = req;
    controller.deleteRemedy(body.id);
    res.status(200);
    res.end();
  } catch (e) {
    res.status(500);
    next(e);
  }
});
//Receives updateData (Object), only returns status
router.put("/update-remedy", async (req, res, next) => {
  try {
    let { body } = req;
    controller.updateRemedy(body);
    res.status(200);
    res.end();
  } catch (e) {
    res.status(500);
    next(e);
  }
});

export default router;
