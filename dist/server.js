"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./routes/index");
// Configurando variáveis ambiente
dotenv_1.default.config();
// Iniciando servidor
const server = (0, express_1.default)();
// Configurando template engine
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Rotas
server.use(index_1.router);
server.use((request, response) => {
    response.status(404).render('pages/404');
});
server.listen(process.env.PORT, () => console.log('Server is running on port 3333!'));
