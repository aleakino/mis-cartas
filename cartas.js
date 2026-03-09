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
