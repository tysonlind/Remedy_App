import express from "express";
import controller from "../controllers/controller.js";


const router = express.Router();

router.post("/add-remedy", async (req, res, next) => {
  try {
    let { body } = req;
    controller.addRemedy(body);
    res.end();
  } catch (e){
    res.send(e);
    next(e);
   
  }
});

router.get("/:AffectedOrgans", async (req, res, next) => {
  try {
    let { AffectedOrgans } = req.params;
    let data = await controller.findOrgan(AffectedOrgans);
    res.json(data);
  } catch (e){
    next(e);
  }
});

router.get("/remedy/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data = await controller.findRemedy(id);
    res.json(data);
  } catch (e){
    next(e);
  }
});

router.delete("/delete-remedy", async (req, res, next) => {
  try {
    let { body } = req;
   controller.deleteRemedy(body.id);
    res.end();
  } catch (e){
    next(e);
  }
});

router.put("/update-remedy", async (req, res, next) => {
  
  try {
    let { body } = req;
    controller.updateRemedy(body);
    res.end();
  } catch (e){
    next(e);
  }
});

export default router;
