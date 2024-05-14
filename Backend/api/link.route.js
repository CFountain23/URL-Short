import express from "express";
import LinksController from "./link.controller.js";

const router = express.Router()

router.route('/full').get(LinksController.apiGetLink)
router.route('/short').post(LinksController.apiCreateLink)
router.route('/')

export default router