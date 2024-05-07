const esPangrama = cadena => {
	const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
	cadena = cadena.toLowerCase();
	return Array.from(ALFABETO_MINUSCULAS).every(letra => cadena.includes(letra));
};
console.log(esPangrama("abcdefghijklmnñopqrstuvwxy"));
// console.log(esPangrama("hola"));