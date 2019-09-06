import { Router } from "express";
const routes = new Router();

routes.get("/tester", (req, res) => {
  return res.json({ msg: "Olá pessoal" });
});

export default routes;
