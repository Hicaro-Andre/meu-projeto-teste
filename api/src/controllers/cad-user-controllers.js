import cadUser from "../models/cad-user"

class CadUserControllers{

 //create user

 async cadUser (req , res){
     try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Todos os campos ( name, email, password) são obrigatórios",
        });
      }

      const userExists = await UserModel.findOne({ $or: [{ cpf }, { email }] });
      if (userExists) {
        return res.status(409).json({
          message: userExists.cpf === cpf ? "CPF já cadastrado" : "Email já cadastrado",
        });
      }

      const createUser = await UserModel.create({
        name,
        email,
        password,
        role: "user",
      });

      const { password: _, ...userWithoutPassword } = createUser.toObject();

      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({ message: "Erro ao criar usuário" });
    }
  }
}




export default CadUserControllers