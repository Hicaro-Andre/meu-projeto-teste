import React, { useState } from "react";
import "../style/CadForm.css";

const CadastroForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState({ nome: "", email: "", senha: "" });

  const validar = () => {
    let valido = true;
    const novosErros = { nome: "", email: "", senha: "" };

    if (!nome.trim()) {
      novosErros.nome = "O nome é obrigatório";
      valido = false;
    }

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
      alert("Cadastro realizado com sucesso!");
      // Aqui você pode adicionar lógica de integração com API
    }
  };

  return (
    <div className="cadastro-wrapper">
      <div className="cadastro-container">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              id="nome"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            {erros.nome && <p className="error-message">{erros.nome}</p>}
          </div>

          {/* Campo Email */}
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

          {/* Campo Senha */}
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <i className="fas fa-lock icon"></i>
            <input
              type={mostrarSenha ? "text" : "password"}
              id="senha"
              placeholder="Crie uma senha"
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

          {/* Botão Cadastrar */}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Cadastrar <i className="fas fa-user-plus"></i>
            </button>
          </div>

          {/* Link para login */}
          <div className="login-link">
            <a href="/" className="btn btn-secondary">
              Faça login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
