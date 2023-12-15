// export{ autenticarUsuario, añadirUsuario }

// SI AÑADO EL EXPORT DE LAS FUNCIONES, NO FUNCIONA Y NO SE MUESTRAN LOS CORREOS EN LA CONSOLA NI SE AÑADEN CORREOS AL SUPABASE.
let supabase;

function createSupabaseClient(url, key) {
    return supabase.createClient(url, key);
}

function initSupabase() {
    const supabaseUrl = 'https://ftjwyocvnnnxbxwtwzsf.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0and5b2N2bm5ueGJ4d3R3enNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTI2NjMzMCwiZXhwIjoyMDE0ODQyMzMwfQ.tF7iOeQzY6fLr0Usu8iuFs9YnFIC5DSI-bB7WtfoqLU';

    supabase = createSupabaseClient(supabaseUrl, supabaseKey);
}
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0and5b2N2bm5ueGJ4d3R3enNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTI2NjMzMCwiZXhwIjoyMDE0ODQyMzMwfQ.tF7iOeQzY6fLr0Usu8iuFs9YnFIC5DSI-bB7WtfoqLU";
const accessToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0and5b2N2bm5ueGJ4d3R3enNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTI2NjMzMCwiZXhwIjoyMDE0ODQyMzMwfQ.tF7iOeQzY6fLr0Usu8iuFs9YnFIC5DSI-bB7WtfoqLU";

const userId = 1;
//Todos los emails = https://szemxkdhbbhfuruwpoqu.supabase.co/rest/v1/usuarios?select=email
//Uno específico, este caso el de juan = https://szemxkdhbbhfuruwpoqu.supabase.co/rest/v1/usuarios?select=email&id=eq.${userId};
fetch(
  `https://ftjwyocvnnnxbxwtwzsf.supabase.co/rest/v1/usuarios?select=email`,
  {
    method: "get",
    headers: {
      apiKey: apiKey,
      Authorization: accessToken,
    },
  }
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.error("Error en la solicitud:", response.statusText);
      throw new Error("Error al obtener datos del usuario");
    }
  })
  //Coger Datos de Supabase
  .then((data) => {
    //Para mostrar uno concreto
    /*
    if (data.length > 0) {
      const emailDeJuan = data[0].email;
      console.log('Email de Juan:', emailDeJuan);
    } else {
      console.error('Usuario no encontrado o sin datos');
    */
    // Manejar los datos de la respuesta
    if (data.length > 0) {
      data.forEach((result) => {
        const email = result.email;
        console.log("Email:", email);
      });
    } else {
      console.error("Usuario no encontrado o sin datos");
    }
  })
  .catch((error) => {
    console.error("Error general:", error.message);
  });

document
  .getElementById("resgitrarUsuario")
  .addEventListener("click", añadirUsuario);

function añadirUsuario() {
  const nombreInput = document.getElementById("nombreInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  const nombre = nombreInput.value;
  const email = emailInput.value;
  const contraseña = passwordInput.value;

  //Agregar Datos a Supabase
  const nuevoUsuario = {
    // Reemplaza con el ID deseado
    nombre: nombre,
    email: email,
    password: contraseña,
  };
  //Recordar poner al enlace la tabla donde vamos a trabajar
  fetch(`https://ftjwyocvnnnxbxwtwzsf.supabase.co/rest/v1/usuarios?select=*`, {
    method: "post",
    headers: {
      apiKey: apiKey,
      Authorization: accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([nuevoUsuario]),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Usuario agregado exitosamente.");
      } else {
        throw new Error("Error al agregar el usuario o usuario repetido");
      }
    })
    .catch((error) => {
      console.error("Error general:", error.message);
    });
}

const emailInput2 = document.getElementById("emailInput2");
const passwordInput2 = document.getElementById("passwordInput2");

const email2 = emailInput2.value;
const contraseña2 = passwordInput2.value;
document
  .getElementById("loginUsuario")
  .addEventListener("click", autenticarUsuario);
// Autenticar a un usuario por correo electrónico y contraseña
function autenticarUsuario(email2, contraseña2) {
  supabase
    .from("usuarios")
    .select("email, password")
    .eq("email", email2)
    .single()
    .then(({ data, error }) => {
      if (error) {
        console.error("Error al autenticar el usuario:", error);
      } else if (data) {
        // Usuario encontrado, compara las contraseñas
        if (data.password === contraseña2) {
          console.log("Usuario autenticado:", data);
          window.location.href = '../blackjack.html';
        } else {
          console.error("Contraseña incorrecta");
        }
      } else {
        console.error("Usuario no encontrado");
      }
    })
    .catch((error) => {
      console.error("Error general:", error.message);
    });
}

