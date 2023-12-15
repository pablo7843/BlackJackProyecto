import { autenticarUsuario, añadirUsuario } from "../src/js/supabase.js"
import { dibujarCarta, pedirCarta, plantarme } from "../src/js/blackjack.js"

describe('Blackjack Game', function() {
    describe('dibujarCarta', function() {
        it('should update x position after drawing a card', function() {
            // Creamos una carta de ejemplo
            const cartaEjemplo = new carta(10, "H");

            // Simulamos el contexto del canvas
            const mockCtx = {
                drawImage: (img, x, y, width, height) => {
                    // No es necesario imprimir aquí para el test
                }
            };

            // Guardamos el valor actual de x
            const xInicial = carta.x;

            // Llamamos a la función dibujarCarta
            dibujarCarta.call({ img: new Image() }, cartaEjemplo, mockCtx);

            // Comprobamos si la posición x se ha actualizado correctamente
            expect(carta.x).toEqual(xInicial + 300);
        });
    });

    describe('pedirCarta', function() {
        it('should add a card to the player\'s hand', function() {
            // Inicializamos el índice de carta
            indiceCarta = 0;

            // Guardamos la longitud actual de las cartas del jugador
            const longitudInicial = cartasJugador.length;

            // Llamamos a la función pedirCarta
            pedirCarta();

            // Comprobamos si se ha añadido una carta al jugador
            expect(cartasJugador.length).toEqual(longitudInicial + 1);
        });
    });

    describe('plantarme', function() {
        it('should disable the "Pedir" and "Plantar" buttons and show the "Reset" button', function() {
            // Inicializamos el índice de carta
            indiceCarta = 0;

            // Simulamos tener algunas cartas para el jugador
            cartasJugador = [new carta(7, "D"), new carta(8, "H")];

            // Llamamos a la función plantarme
            plantarme();

            // Comprobamos el estado de los botones y la visibilidad del botón reset
            expect(document.getElementById("pedir").disabled).toBeTruthy();
            expect(document.getElementById("plantar").disabled).toBeTruthy();
            expect(document.getElementById("reset").style.visibility).toEqual("visible");
        });
    });
});

describe('autenticarUsuario', () => {
    it('debería autenticar a un usuario con el correo electrónico y la contraseña correctos', async () => {
        // Mock para supabase.from y supabase.single
        spyOn(supabase, 'from').and.returnValue({
            select: () => ({
                eq: () => ({
                    single: async () => ({ data: { email: 'test@example.com', password: 'password123' }, error: null }),
                }),
            }),
        });

        // Llama a autenticarUsuario
        await autenticarUsuario('test@example.com', 'password123');

        // Expectativas para verificar que los métodos de Supabase se llamaron correctamente
        expect(supabase.from).toHaveBeenCalledWith('usuarios');
        expect(console.error).not.toHaveBeenCalled(); // Asegúrate de que no se hayan registrado errores
    });
});

describe('añadirUsuario', () => {
    it('debería agregar un nuevo usuario con los datos proporcionados', async () => {
        // Mock para supabase.upsert
        spyOn(supabase, 'upsert').and.returnValue(Promise.resolve({ data: null, error: null }));

        // Llama a añadirUsuario
        await añadirUsuario('John Doe', 'john@example.com', 'password123');

        // Expectativa para verificar que el método de Supabase se llamó correctamente
        expect(supabase.upsert).toHaveBeenCalledWith([{
            nombre: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
        }]);
        expect(console.error).not.toHaveBeenCalled(); // Asegúrate de que no se hayan registrado errores
    });
});