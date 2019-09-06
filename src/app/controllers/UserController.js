import User from "../models/User";

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(401).json({ error: "User is not valid" });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }
}
export default new UserController();
