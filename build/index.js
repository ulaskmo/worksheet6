"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
const PORT = 3000;
// MongoDB Connection URI
const uri = 'mongodb+srv://s00219971:12345@cluster0.yyvrr.mongodb.net/web2_2024?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(uri);
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log('Connected to MongoDB successfully.');
            const database = client.db('web2_2024');
            const collection = database.collection('users');
            // Sample route to fetch data from the collection
            app.get('/users', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const users = yield collection.find({}).toArray();
                res.json(users);
            }));
            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
            });
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    });
}
connectToDatabase();
