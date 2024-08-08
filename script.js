let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});



typewriter
  .pauseFor(3000)
  .typeString('¡Hola! Bienvenida')
  .pauseFor(300)
  .deleteAll(10)
  .typeString('Soy May Hernández')
  .pauseFor(2000)
  .start();