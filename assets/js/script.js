document.addEventListener("DOMContentLoaded", () => {
    // Clase Propietario
    class Propietario {
        constructor(nombre, direccion, telefono) {
            this.nombre = nombre;
            this.direccion = direccion;
            this.telefono = telefono;
        }
        datosPropietario() {
            return `Nombre: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`;
        }
    }

    // Clase Tipo Animal
    class Animal {
        constructor(tipo) {
            this.tipo = tipo;
        }
        getTipo() {
            return `El tipo de animal es un: ${this.tipo}`;
        }
    }

    // Clase Mascota
    class Mascota extends Animal {
        constructor(nombre, tipo, propietario) {
            super(tipo);
            this._nombre = nombre;
            this.propietario = propietario;
        }
        get nombre() {
            return this._nombre;
        }

        set nombre(newNombre) {
            this._nombre = newNombre;
        }
    }

    // Formulario
    const formulario = document.getElementById("formulario");
    const nombreMascotaInput = document.getElementById("nombreMascota");
    const tipoAnimalSelect = document.getElementById("tipo");
    const propietarioInput = document.getElementById("propietario");
    const direccionInput = document.getElementById("direccion");
    const telefonoInput = document.getElementById("telefono");
    const listaMensaje = document.getElementById("listaMensaje");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreMascota = nombreMascotaInput.value;
        const tipoAnimal = tipoAnimalSelect.value;
        const propietario = new Propietario(propietarioInput.value, direccionInput.value, telefonoInput.value);

        const mascota = new Mascota(nombreMascota, tipoAnimal, propietario);

        //Mostrar mensaje
        const mensaje = `${mascota.getTipo()}, Nombre de la mascota: ${mascota.nombre}, ${mascota.propietario.datosPropietario()}`;
        const listItem = document.createElement("li");
        listItem.textContent = mensaje;
        listaMensaje.appendChild(listItem);

        // Limpiar campos del formulario
        nombreMascotaInput.value = "";
        propietarioInput.value = "";
        direccionInput.value = "";
        telefonoInput.value = "";
    });
});


