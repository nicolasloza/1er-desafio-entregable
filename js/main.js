const nombre = prompt('Ingrese su nombre')

// Declaro función saludar
function saludar() {
    alert('Bienvenido, ' + nombre + ' a la tienda OFICIAL de Las Pastillas del Abuielo.')
}
saludar()

// Declaro variable y función comprarProducto
let producto = prompt('Elija uno de nuestros modelos de remeras \n 1: Paradojas + CD \n 2: El Favor \n 3: Crisis + CD \n 4: Kermesse + CD')

function comprarProducto() {
    
    while (producto !== '1' || producto !== '2' || producto !== '3' || producto !== '4') {
        if (producto === '1' ) {
            alert('Elegiste el modelo PARADOJAS + CD para tu compra');
            break
        } else if (producto === '2') {
            alert('Elegiste el modelo EL FAVOR para tu compra');
            break
        } else if (producto === '3') {
            alert('Elegiste el modelo CRISIS + CD para tu compra');
            break
        } else if (producto === '4') {
            alert('Elegiste el modelo KERMESSE + CD para tu compra');
            break
        }

        producto = prompt('Elija uno de nuestros modelos de remeras \n 1: Paradojas + CD \n 2: El Favor \n 3: Crisis + CD \n 4: Kermesse + CD')
    }
    
    envioDireccion = prompt('Indique calle, numeración y localidad donde desea recibir el producto seleccionado:');

    // Declaro prompt para solicitar la localidad para envío
    envioLocalidad = prompt('Ingrese la localidad que corresponda a la dirección ingresada anterioremente (CABA / GRAN BUENOS AIRES):');

    confirmacion = prompt(`${nombre}, su dirección es: ` + envioDireccion + ', ' + envioLocalidad + '. Es correcto? : \n (indique respuesta con númer segun corresponta) \n1: SI \n2: NO \n3: CANCELAR COMPRA')
    
     
}
comprarProducto()
     

function finalizarCompra() {
    if (producto === '1') {
        alert( 'Usted eligio el modelo PARADOJAS + CD por un monto final de $' + resultadoParadojas +'. Dentro de las 72hs habiles le llegara el producto a la siguiente dirección: ' + envioDireccion + ', ' + envioLocalidad + '.');
    } else if (producto === '2') {
        alert('Usted eligio el modelo EL FAVOR por un monto final de $' + resultadoElFavor + '. Dentro de las 72hs habiles le llegara el producto a la siguiente dirección: ' + envioDireccion + ', ' + envioLocalidad + '.');
    } else if (producto === '3') {
        alert('Usted eligio el modelo CRISIS + CD por un monto final de $' + resultadoCrisis + '. Dentro de las 72hs habiles le llegara el producto a la siguiente dirección: ' + envioDireccion + ', ' + envioLocalidad + "."); 
    } else if (producto === '4') {
        alert('Usted eligio el modelo KERMESSE + CD por un monto final de $' + resultadoKermesse + '. Dentro de las 72hs habiles le llegara el producto a la siguiente dirección: ' + envioDireccion + ', ' + envioLocalidad + '.');
    }       
    
    alert('GRACIAS POR SU COMPRA, PASTILLERO!');
} 


// Declaro variables
let paradojas = 3000
let elFavor = 1500
let crisis = 2450
let kermesse = 2100
let envio = 300

let resultadoParadojas = paradojas + envio
let resultadoElFavor = elFavor + envio
let resultadoCrisis = crisis + envio
let resultadoKermesse = kermesse + envio



while (confirmacion !== '') {
    if (confirmacion == '1') {
        finalizarCompra()
        break
    } else if (confirmacion == '2') {
        comprarProducto()
    } else if (confirmacion == '3'){
        alert(`VUELVA PRONTO, ${nombre}!`)
        break   
    }
}

