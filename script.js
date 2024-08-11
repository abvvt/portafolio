
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Reconoces una acción porque tiene paréntesis después del nombre de la acción
// a veces tiene el operador punto
typewriter
  .pauseFor(2500)
  .typeString('Abigail Vázquez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Dessarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();

  let frase = document.getElementById('frase');

let typewriterfrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});


typewriterfrase
  .pauseFor(2500)
  .typeString('La resistencia es el puente que te lleva de donde estás a donde quieres estar')
  .pauseFor(300)
  .deleteAll()
  .typeString('James Clear')
  .pauseFor(1000)
  .start();






