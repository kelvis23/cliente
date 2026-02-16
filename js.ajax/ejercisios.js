
//1.- Crear una función llamada hacerTarea que devuelva una promesa, espere
//un segundo y se resuelva con el mensaje “Tarea completada”. Crea una
//función run() marcada como async que llame a hacerTarea usando await e
//imprima por consola el mensaje que devuelve.

function hacerTarea() {
        return new Promise((resolve) => {

                setTimeout(() => {
                        resolve(`Tara completada `);

                }, 1000);
        })
}

async function run() {
        let yamar = await hacerTarea();
        console.log(yamar)
}

run();

//2.- Crea una función llamada doblar que reciba un número como parámetro,
//devuelva una promesa y espere un segundo, resolviendo con el número
//mutiplicado por dos si el número es positivo y rechazando con “Utiliza solo
//números positivos” si no. Crea una función run() marcada como async que
//llame a doblar(5) usando await, y vuelve a doblar el resultado volviendo a
//llamar a la función doblar para luego imprimir en consola “Resultado: X”


function doblar(n) {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        if (n >= 0) {
                                resolve(n * 2)
                        } else {
                                reject("Utiliza solo números positivos");
                        }
                }, 1000)
        })

}

async function run() {
        try {
                const r1 = await doblar(5);
                const r2 = await doblar(r1);
                console.log(`Resultado: ${r2}`);
        } catch (error) {
                console.log(error);
        }
}

doblar(2).then(console.log);
doblar(-1).then(console.log);
run();