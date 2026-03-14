// ═══════════════════════════════════════════════════════════════
// TUS CARTAS — Edita este bloque directamente en GitHub
// Para agregar una carta nueva, copia un objeto { ... } y pégalo
// al principio del array (así aparece primero en la página).
//
// Colores disponibles: coral · sky · mint · lavender · amber
// ═══════════════════════════════════════════════════════════════

const cartas = [
  {
    id: "1",
    color: "coral",
    para: "Mi amor",
    titulo: "La primera",
    cuerpo: "Esta es la primera carta que te escribo. La verdad no sé por dónde comenzar jajaja.\n\nQuiero agradecerte por ser la persona tan linda que eres, no sabes lo mucho que alegras mis días, con solo ver tu sonrisa hermosa.\n\nTambién quiero agradecerte por darme el tiempo de conocerme a pesar de que soy algo complicado, con mis formas raras de expresarme, pero te prometo que estoy trabajando en eso.\n\nSabes, cada día que pasa me siento feliz de tenerte en mi vida y espero poder seguir conociéndote más cada día y también poder seguir creando recuerdos lindos junto a ti.\n\nTe amo mucho y espero te guste mi regalo. Sé que no es mucho pero lo hice con todo mi amor para ti.\n\nEspero te guste y lo disfrutes mucho.\nTe amo mucho, mi amor.",
    firma: "Javier",
    fecha: "9 de marzo de 2025"
  },
  {
    id: "2",
    color: "sky",
    para: "Mi amor",
    titulo: "Feliz cumpleaños",
    cuerpo: "Hola mi amor, feliz cumpleaños. El primer cumpleaños que celebramo juntos y seguro seran muchos mas, aunque este dia pases ocupadita y solita de cierto modo, quiero que sepas que te amo mucho y que espero que este nuevo año de vida te traiga muchas cosas lindas, salud, felicidad, amor y todo lo que deseas.\n\nEspero que este día sea especial para ti y que lo disfrutes mucho, aunque no estemos juntos en persona, siempre estaré pensando en ti y enviándote todo mi amor.\n\nTe amo mucho, mi amor. Feliz cumpleaños.",
    firma: "Javier",
    fecha: "11 de marzo de 2025"
  },
  {
    id: "3",
    color: "mint",
    para: "Mi amor",
    titulo: "Dos Oruguitas",
    cuerpo:"",
    youtube: "x3Dl8K6RBcc",
    firma: "Javier",
    fecha: "11 de marzo de 2026"
  },
  {
    id: "4",
    color: "lavender",
    para: "Gabi jr",
    titulo: "Lo que siento por ti",
    cuerpo: "Me preguntaron:\n\n‑¿Y cómo es ella?\n\nY yo les respondí:\n\n‑Ella es como un cúmulo de galaxias: una presencia masiva, compleja y llena de energía. Es irresistible por su propia gravedad; de esas que emiten mucha luz a pesar de su oscuridad. Parte de su esencia es invisible, profunda y difícil de detectar a simple vista. Solo con los ojos del alma logras ver más allá. Es capaz de distorsionar la realidad con tan solo su sonrisa. Es una oportunidad única en la vida. De esas mujeres que te hacen sentir que has ganado la lotería, que te quitan el sueño y te obligan a viajar a través del espacio‑tiempo.",
    firma: "Javier",
    fecha: "11 de marzo de 2026"
  }, 
  {
    id: "5",
    color: "amber",
    para: "Mi morena hermosa",
    titulo: "Orgullosa de ti misma",
    cuerpo: "Ultimamente he pensado que deberías estar mas orgullosa de ti misma, por la forma en que has enfrentado los ultimas años, desde las batallas silenciosas que has librado, hasta los momentos donde has sentido que no puedes más, incluso los momentos donde has caido, pero aun asi has decidido levantarte una vez mas y mirar hacia delante.\n\n Eres una guerrera. \n\n Así que Gabi por hazte un favor, celebra tu fortaleza.",
    firma: "Tu futuro esposo",
    fecha: "12 de marzo de 2026"
  },
  {
    id: "6",
    color: "coral",
    para: "Mi futura esposa",
    titulo: "Nuestro Juramento",
    cuerpo: "Querida Gabi,\n\nLa distancia muchas veces pesa, porque hay días en los que simplemente quisiera abrazarte, mirarte a los ojos o caminar a tu lado sin tener que despedirme por una pantalla o por una llamada. Pero también sé que cuando el amor es verdadero, ni la distancia ni el tiempo pueden romper lo que dos corazones sienten. No me canso de extrañarte, de pensarte, de sentir tantas cosas cuando miro tu nombre, tu cara, tu cuerpo, de sentir paz cuando escucho tu voz. Y aunque no siempre es fácil, cada día contigo confirma que todo vale la pena. Gracias por llegar a mi vida, por quedarte a pesar de mis defectos, por hacerme sentir amado, incluso desde la distancia, siento el calor que me brinda tu amor. Gracias por enseñarme que el amor también puede ser paciencia, esperanza y ganas de luchar por lo que sentimos. Cuando cierro los ojos imagino el momento en que ya no tengamos que despedirnos cuando la distancia solo sea un recuerdo y pueda abrazarte todo lo que hoy extraño. Sé que ese día llegará y hará que todo el tiempo que hemos pasado lejos valdrán aún más la pena. Porque amar así, aunque a veces duela, es la cosa más linda que me ha pasado en mi vida. Te amo, hoy, a la distancia...\n\nY por cada día que nos espera juntos.",
    firma: "Tu futuro esposo",
    fecha: "13 de marzo de 2026"
  }
];


// ═══════════════════════════════════════════════════════════════
// A partir de aquí no necesitas editar nada
// ═══════════════════════════════════════════════════════════════

let cartaActualId = null;

function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  if (cartas.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="emoji">✉️</span>
        <p>Todavía no hay cartas aquí.<br>Vuelve pronto.</p>
      </div>`;
    return;
  }

  cartas.forEach((carta, i) => {
    const div = document.createElement('div');
    div.className = 'carta-card';
    div.setAttribute('data-color', carta.color);
    div.style.animationDelay = `${i * 0.06}s`;
    div.innerHTML = `
      <div class="carta-para">Para ${carta.para || 'alguien especial'}</div>
      <div class="carta-titulo">${carta.titulo || 'Sin título'}</div>
      <div class="carta-preview">${carta.cuerpo || ''}</div>
      <div class="carta-footer">
        <span>${carta.fecha}</span>
      </div>
    `;
    div.addEventListener('click', () => leerCarta(carta.id));
    grid.appendChild(div);
  });
}

function leerCarta(id) {
  const carta = cartas.find(c => c.id === id);
  if (!carta) return;

  cartaActualId = id;

  const coloresSep = {
    coral: '#FF6B6B',
    sky: '#4D96FF',
    mint: '#6BCB77',
    lavender: '#C77DFF',
    amber: '#FFD93D'
  };

  document.getElementById('leerPara').textContent   = carta.para   ? `Para ${carta.para}` : '';
  document.getElementById('leerTitulo').textContent = carta.titulo || '';
  document.getElementById('leerSep').style.background = coloresSep[carta.color] || '#ccc';
  const youtube = carta.youtube
    ? `<iframe width="100%" height="250" src="https://www.youtube.com/embed/${carta.youtube}"
        frameborder="0" allowfullscreen style="border-radius:12px;margin-bottom:1rem"></iframe>`
    : '';
  document.getElementById('leerCuerpo').innerHTML = youtube + (carta.cuerpo
    ? `<span style="white-space:pre-wrap;font-style:italic">${carta.cuerpo}</span>`
    : '');
  document.getElementById('leerFirma').textContent  = carta.firma  ? `— ${carta.firma}` : '';

  document.getElementById('modalLeer').classList.add('visible');
}

function cerrarLeer() {
  document.getElementById('modalLeer').classList.remove('visible');
}

function compartirCarta() {
  const carta = cartas.find(c => c.id === cartaActualId);
  if (!carta) return;

  const texto = [
    carta.titulo,
    carta.para ? `Para: ${carta.para}` : '',
    '',
    carta.cuerpo,
    '',
    carta.firma ? `— ${carta.firma}` : ''
  ].filter(l => l !== undefined).join('\n');

  navigator.clipboard.writeText(texto)
    .then(() => toast('📋 Carta copiada al portapapeles'));
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// Eventos globales
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarLeer();
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modalLeer').addEventListener('click', function(e) {
    if (e.target === this) cerrarLeer();
  });

  renderGrid();
});

function avisarCarta() {
  fetch("https://formspree.io/f/mdawgzpy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "✦ Se publicó una carta nueva en Mis Cartas" })
  }).then(() => toast('✉️ Aviso enviado'));
}
