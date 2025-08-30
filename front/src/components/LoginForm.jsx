import React, { useState } from "react";
import "../style/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState({ email: "", senha: "" });

  const validar = () => {
    let valido = true;
    const novosErros = { email: "", senha: "" };

    if (!email) {
      novosErros.email = "O e-mail é obrigatório";
      valido = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      novosErros.email = "Digite um e-mail válido";
      valido = false;
    }

    if (!senha) {
      novosErros.senha = "A senha é obrigatória";
      valido = false;
    } else if (senha.length < 6) {
      novosErros.senha = "A senha deve ter pelo menos 6 caracteres";
      valido = false;
    }

    setErros(novosErros);
    return valido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Login realizado com sucesso!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Campo de e-mail */}
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <i className="fas fa-envelope icon"></i>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {erros.email && <p className="error-message">{erros.email}</p>}
          </div>

          {/* Campo de senha */}
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <i className="fas fa-lock icon"></i>
            <input
              type={mostrarSenha ? "text" : "password"}
              id="senha"
              placeholder="sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              <i className={`fas ${mostrarSenha ? "fa-eye-slash" : "fa-eye"}`} />
            </button>
            {erros.senha && <p className="error-message">{erros.senha}</p>}
          </div>

          {/* Botão entrar */}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Entrar <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Cadastro */}
          <div className="signup">
            <p>Não tem uma conta?</p>
            <a href="#cadastro" className="btn btn-secondary">
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
