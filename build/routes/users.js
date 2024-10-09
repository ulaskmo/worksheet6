"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
// Routes for user operations
router.get('/', users_1.getUsers);
router.get('/:id', users_1.getUserById);
router.post('/', auth_middleware_1.authenticateKey, users_1.createUser); // Using the middleware before creating a user
router.put('/:id', users_1.updateUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
