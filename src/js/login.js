// Función para manejar el inicio de sesión
function iniciarSesion() {
}

// Función para manejar el registro de usuarios
function registrarUsuario() {
}

// Ocultar formularios al cargar la página
document.getElementById('loginForm').classList.add('hidden');
document.getElementById('registroForm').classList.add('hidden');

// Autenticar a un usuario por correo electrónico y contraseña
const usuarioExistenteEmail = "pepito@gmail.com";
const contraseñaUsuario = "pepito";

autenticarUsuario(usuarioExistenteEmail, contraseñaUsuario);


function mostrarFormulario(formularioId) {
// Ocultar todos los formularios
const formularios = document.querySelectorAll('form');
formularios.forEach(formulario => {
    formulario.classList.add('hidden');
});

// Mostrar el formulario deseado
document.getElementById(formularioId).classList.remove('hidden');
}

// Crear elementos del formulario de inicio de sesión
const loginForm = document.createElement('form');
loginForm.id = 'loginForm';

const emailLabel = document.createElement('label');
emailLabel.for = 'email';
emailLabel.textContent = 'Correo electrónico:';
loginForm.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.required = true;
loginForm.appendChild(emailInput);

const passwordLabel = document.createElement('label');
passwordLabel.for = 'contraseña';
passwordLabel.textContent = 'Contraseña:';
loginForm.appendChild(passwordLabel);

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'contraseña';
passwordInput.required = true;
loginForm.appendChild(passwordInput);

const loginButton = document.createElement('button');
loginButton.type = 'button';
loginButton.textContent = 'Iniciar Sesión';
loginButton.addEventListener('click', iniciarSesion);
loginForm.appendChild(loginButton);

document.body.appendChild(loginForm);

// Crear elementos del formulario de registro
const registroForm = document.createElement('form');
registroForm.id = 'registroForm';

const nuevoNombreLabel = document.createElement('label');
nuevoNombreLabel.for = 'nuevoNombre';
nuevoNombreLabel.textContent = 'Nuevo nombre:';
registroForm.appendChild(nuevoNombreLabel);

const nuevoNombreInput = document.createElement('input');
nuevoNombreInput.type = 'nombre';
nuevoNombreInput.id = 'nuevoNombre';
nuevoNombreInput.required = true;
registroForm.appendChild(nuevoNombreInput);

const nuevoEmailLabel = document.createElement('label');
nuevoEmailLabel.for = 'nuevoEmail';
nuevoEmailLabel.textContent = 'Nuevo correo electrónico:';
registroForm.appendChild(nuevoEmailLabel);

const nuevoEmailInput = document.createElement('input');
nuevoEmailInput.type = 'email';
nuevoEmailInput.id = 'nuevoEmail';
nuevoEmailInput.required = true;
registroForm.appendChild(nuevoEmailInput);

const nuevaContraseñaLabel = document.createElement('label');
nuevaContraseñaLabel.for = 'nuevaContraseña';
nuevaContraseñaLabel.textContent = 'Nueva contraseña:';
registroForm.appendChild(nuevaContraseñaLabel);

const nuevaContraseñaInput = document.createElement('input');
nuevaContraseñaInput.type = 'password';
nuevaContraseñaInput.id = 'nuevaContraseña';
nuevaContraseñaInput.required = true;
registroForm.appendChild(nuevaContraseñaInput);

const registroButton = document.createElement('button');
registroButton.type = 'button';
registroButton.textContent = 'Registrar Usuario';
registroButton.addEventListener('click', registrarUsuario);
registroForm.appendChild(registroButton);

document.body.appendChild(registroForm);



// let supabase;

// // Función para crear un cliente de Supabase
// function createSupabaseClient(url, key) {
//     return supabase.createClient(url, key);
// }

// // Lógica de inicialización de Supabase
// function initSupabase() {
//     const supabaseUrl = 'https://ftjwyocvnnnxbxwtwzsf.supabase.co';
//     const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0and5b2N2bm5ueGJ4d3R3enNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjYzMzAsImV4cCI6MjAxNDg0MjMzMH0.WlMeYCDWudOonvOLKxr-v0R9Ah3xaWN12eJCGwSjU08';
//     supabase = createSupabaseClient(supabaseUrl, supabaseKey);
// }

// // Lógica de inicio de sesión
// async function iniciarSesion() {
//     if (!supabase) {
//         console.error('Supabase no inicializado');
//         return;
//     }

//     const email = document.getElementById('email').value;
//     const contraseña = document.getElementById('contraseña').value;

//     try {
//         const { data, error } = await supabase
//             .from('usuarios')
//             .select('*')
//             .eq('email', email)
//             .single();

//         if (error) {
//             console.error('Error al obtener datos del usuario:', error.message);
//             return;
//         }

//         if (data && data.contraseña === contraseña) {
//             console.log('Inicio de sesión exitoso');
//         } else {
//             console.log('Correo o contraseña incorrectos');
//         }
//     } catch (error) {
//         console.error('Error general:', error.message);
//     }
// }

// // Lógica de registro de usuario
// async function registrarUsuario() {
//     if (!supabase) {
//         console.error('Supabase no inicializado');
//         return;
//     }

//     const nuevoEmail = document.getElementById('nuevoEmail').value;
//     const nuevaContraseña = document.getElementById('nuevaContraseña').value;

//     const nuevoUsuario = {
//         email: nuevoEmail,
//         contraseña: nuevaContraseña
//     };

//     try {
//         const { data, error } = await supabase
//             .from('usuarios')
//             .upsert([nuevoUsuario]);

//         if (error) {
//             console.error('Error al agregar el usuario:', error.message);
//             return;
//         }

//         console.log('Usuario registrado exitosamente');
//     } catch (error) {
//         console.error('Error general:', error.message);
//     }
// }

// // Inicializar Supabase
// initSupabase();


// login.js

let supabase;

function createSupabaseClient(url, key) {
    return supabase.createClient(url, key);
}

function initSupabase() {
    const supabaseUrl = 'https://ftjwyocvnnnxbxwtwzsf.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0and5b2N2bm5ueGJ4d3R3enNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjYzMzAsImV4cCI6MjAxNDg0MjMzMH0.WlMeYCDWudOonvOLKxr-v0R9Ah3xaWN12eJCGwSjU08';

    supabase = createSupabaseClient(supabaseUrl, supabaseKey);
}

function autenticarUsuario(email, password) {
    supabase
        .from('usuarios')
        .select('email, password') // Asegúrate de tener una columna 'password' en tu tabla
        .eq('email', email)
        .eq('password', password)
        .single()
        .then(({ data, error }) => {
            if (error) {
                console.error('Error al autenticar el usuario:', error);
            } else if (data) {
                console.log('Usuario autenticado:', data);
            } else {
                console.error('Usuario no encontrado o contraseña incorrecta');
            }
        })
        .catch(error => {
            console.error('Error general:', error.message);
        });
}

function registrarUsuario(email, password) {
    const nuevoUsuario = {
        email: email,
        password: password,
    };

    supabase
        .from('usuarios')
        .upsert([nuevoUsuario])
        .then(({ data, error }) => {
            if (error) {
                console.error('Error al agregar el usuario:', error);
            } else {
                console.log('Usuario registrado exitosamente:', data);
            }
        })
        .catch(error => {
            console.error('Error general:', error.message);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    initSupabase();

    // Autenticar a un usuario por correo electrónico y contraseña
    const usuarioExistenteEmail = "pepito@gmail.com";
    const contraseñaUsuario = "pepito";

    autenticarUsuario(usuarioExistenteEmail, contraseñaUsuario);

    // Registrar usuario (debes cambiar estos valores)
    const nuevoUsuarioEmail = "nuevo_usuario@gmail.com";
    const nuevaContraseñaUsuario = "nueva_contraseña";

    registrarUsuario(nuevoUsuarioEmail, nuevaContraseñaUsuario);
});



