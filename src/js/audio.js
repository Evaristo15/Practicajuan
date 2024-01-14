import { Howl } from 'howler';

// Carga los archivos de audio
var audioInicio = new Howl({ src: ['src/audio/inicio.mp3'] });
var audioAcerca = new Howl({ src: ['src/audio/acerca.mp3'] });
var audioContacto = new Howl({ src: ['src/audio/contacto.mp3'] });
var audioIniciarSesion = new Howl({ src: ['src/audio/iniciarSesion.mp3'] });

// Agrega el evento 'click' a los enlaces
document.querySelector('a[href="#inicio"]').addEventListener('click', function(e) {
  e.preventDefault();
  audioInicio.play();
});
document.querySelector('a[href="#acerca"]').addEventListener('click', function(e) {
  e.preventDefault();
  audioAcerca.play();
});
document.querySelector('a[href="#contacto"]').addEventListener('click', function(e) {
  e.preventDefault();
  audioContacto.play();
});
document.querySelector('a[href="sesion.html"]').addEventListener('click', function(e) {
  e.preventDefault();
  audioIniciarSesion.play();
});
