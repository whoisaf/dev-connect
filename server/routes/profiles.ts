import { Router } from "express";

import authMiddleware from "../middleware/auth";
import * as controller from "../controllers/profiles.controller";
import * as validator from "../validators/profile.validator";

const router: Router = Router();

// @route   GET api/profiles/me
// @desc    get current users profile
// @access  private
router.get("/me", authMiddleware, controller.getCurrentProfile);

// @route   GET api/profiles
// @desc    get all profiles
// @access  public
router.get("/", controller.getAllProfiles);

// @route   GET api/profiles/:id
// @desc    get profile by id
// @access  public
router.get("/:id", controller.getProfileById);

// @route   POST api/profiles
// @desc    create profile
// @access  private
router.post(
  "/",
  authMiddleware,
  validator.validateCreateProfile,
  controller.createProfile
);

// @route   DELETE api/profiles
// @desc    delete profile, user & posts
// @access  private
router.delete("/", authMiddleware, controller.deleteProfile);

export default router;
