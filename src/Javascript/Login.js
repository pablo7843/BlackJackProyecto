import { useState } from "react";
import { client } from "../supabase/client";
function Login() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const Enviar = async (e) => {
    //Comando en base a un evento, el cual es el enviar correo, para que no refresque la pagina y ver el correo en la consola
    e.preventDefault();
    try {
      const result = await client.auth.signInWithPassword({
        email,
        password:'contraseña',
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={Enviar}>
        <input
          type="email"
          name="email"
          placeholder="tu_email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="YourPassword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
