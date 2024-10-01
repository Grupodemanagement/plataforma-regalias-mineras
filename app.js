async function conectarMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Conectado a MetaMask");
            // Aquí puedes agregar la lógica para interactuar con tu contrato inteligente
        } catch (error) {
            console.error("Error al conectar MetaMask", error);
        }
    } else {
        console.error("MetaMask no está instalado");
    }
}

window.onload = conectarMetaMask;
