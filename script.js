/* ==========================================================================
   DIBUJO TÉCNICO — JAVASCRIPT VANILLA COMPARTIDO (ARQUITECTURA MULTIPÁGINA)
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. CATÁLOGO DE LÁMINAS TÉCNICAS (IMAGEN HD GENERADA + PLANO SVG VECTORIAL)
     ------------------------------------------------------------------------ */
  const PLATES = [
    {
      id: 'LAM-01',
      title: 'Soporte en L con Taladro Pasante',
      category: 'ortogonales',
      categoryLabel: 'Vistas Ortogonales (Sistema Europeo)',
      scale: '1:1',
      format: 'A4 (210×297)',
      norm: 'ISO 128-30',
      system: 'ISO-E (1.er Diedro)',
      image: 'assets/images/lam-01-ortogonales.jpg',
      description:
        'Representación diédrica completa en tres vistas (alzado, planta y perfil izquierdo) alineadas por líneas de proyección. Incluye aristas ocultas del taladro pasante y ejes de simetría.',
      strokes: [
        'Línea continua gruesa (0.7 mm): contornos y aristas visibles.',
        'Línea discontinua media (0.35 mm): aristas ocultas de perforaciones.',
        'Línea de trazo y punto fina (0.25 mm): ejes de simetría y centros.',
        'Líneas de cota con flechas cerradas rellenas a 15° y cifras en mm.'
      ],
      svg: `
        <svg viewBox="0 0 480 340" role="img" aria-label="Vistas ortogonales de soporte en L en sistema europeo">
          <rect x="8" y="8" width="464" height="324" fill="#0F172A" stroke="#334155" stroke-width="1"/>
          <line x1="60" y1="158" x2="60" y2="205" stroke="#334155" stroke-width="0.9" stroke-dasharray="3 3"/>
          <line x1="210" y1="158" x2="210" y2="205" stroke="#334155" stroke-width="0.9" stroke-dasharray="3 3"/>
          <line x1="210" y1="48" x2="290" y2="48" stroke="#334155" stroke-width="0.9" stroke-dasharray="3 3"/>
          <line x1="210" y1="158" x2="290" y2="158" stroke="#334155" stroke-width="0.9" stroke-dasharray="3 3"/>
          <text x="60" y="34" fill="#94A3B8" font-family="JetBrains Mono, monospace" font-size="9">ALZADO</text>
          <path d="M 60 48 H 104 V 118 H 210 V 158 H 60 Z" fill="#1E293B" stroke="#F8FAFC" stroke-width="2"/>
          <line x1="152" y1="118" x2="152" y2="158" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="5 3"/>
          <line x1="178" y1="118" x2="178" y2="158" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="5 3"/>
          <line x1="165" y1="108" x2="165" y2="168" stroke="#D97706" stroke-width="1" stroke-dasharray="9 3 2 3"/>
          <line x1="36" y1="48" x2="54" y2="48" stroke="#D97706" stroke-width="0.9"/>
          <line x1="36" y1="158" x2="54" y2="158" stroke="#D97706" stroke-width="0.9"/>
          <line x1="42" y1="48" x2="42" y2="158" stroke="#D97706" stroke-width="1"/>
          <text x="36" y="103" text-anchor="middle" fill="#D97706" font-family="JetBrains Mono, monospace" font-size="10" transform="rotate(-90 36 103)">110</text>
          <text x="60" y="196" fill="#94A3B8" font-family="JetBrains Mono, monospace" font-size="9">PLANTA</text>
          <rect x="60" y="205" width="150" height="82" fill="#1E293B" stroke="#F8FAFC" stroke-width="2"/>
          <line x1="104" y1="205" x2="104" y2="287" stroke="#F8FAFC" stroke-width="1.6"/>
          <circle cx="165" cy="246" r="13" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.6"/>
          <line x1="144" y1="246" x2="186" y2="246" stroke="#D97706" stroke-width="1" stroke-dasharray="8 2 2 2"/>
          <line x1="165" y1="224" x2="165" y2="268" stroke="#D97706" stroke-width="1" stroke-dasharray="8 2 2 2"/>
          <line x1="60" y1="308" x2="210" y2="308" stroke="#D97706" stroke-width="1"/>
          <text x="135" y="303" text-anchor="middle" fill="#D97706" font-family="JetBrains Mono, monospace" font-size="10">150</text>
          <text x="290" y="34" fill="#94A3B8" font-family="JetBrains Mono, monospace" font-size="9">PERFIL IZQ.</text>
          <rect x="290" y="48" width="82" height="110" fill="#1E293B" stroke="#F8FAFC" stroke-width="2"/>
          <line x1="290" y1="118" x2="372" y2="118" stroke="#F8FAFC" stroke-width="1.6"/>
          <line x1="318" y1="118" x2="318" y2="158" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="5 3"/>
          <line x1="344" y1="118" x2="344" y2="158" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="5 3"/>
          <line x1="331" y1="108" x2="331" y2="168" stroke="#D97706" stroke-width="1" stroke-dasharray="9 3 2 3"/>
          <text x="331" y="182" text-anchor="middle" fill="#0284C7" font-family="JetBrains Mono, monospace" font-size="9">Ø 26 PASANTE</text>
        </svg>
      `
    },
    {
      id: 'LAM-02',
      title: 'Bloque Escalonado con Ranura en U',
      category: 'isometrica',
      categoryLabel: 'Perspectiva Isométrica',
      scale: '1:2',
      format: 'A4 (210×297)',
      norm: 'ISO 5456-3',
      system: 'Axonometría 120°',
      image: 'assets/images/lam-02-isometrica.jpg',
      description:
        'Proyección isométrica con ejes X, Y, Z separados a 120° (inclinación de 30° respecto a la horizontal). Muestra un bloque mecánico escalonado con ranura central mecanizada y cotas paralelas a los ejes.',
      strokes: [
        'Ejes isométricos a 30° y vertical Z con coeficiente de reducción normalizado.',
        'Contornos exteriores en trazo continuo de 0.7 mm sobre fondo blueprint.',
        'Ranura central y escalón superior destacados con líneas de arista interior.',
        'Cotas alineadas a los planos principales de proyección.'
      ],
      svg: `
        <svg viewBox="0 0 480 340" role="img" aria-label="Perspectiva isométrica de bloque escalonado con ranura en U">
          <rect x="8" y="8" width="464" height="324" fill="#0F172A" stroke="#334155" stroke-width="1"/>
          <g transform="translate(240, 210)">
            <line x1="0" y1="78" x2="0" y2="-165" stroke="#334155" stroke-width="1" stroke-dasharray="5 3"/>
            <line x1="0" y1="78" x2="165" y2="-17" stroke="#334155" stroke-width="1" stroke-dasharray="5 3"/>
            <line x1="0" y1="78" x2="-165" y2="-17" stroke="#334155" stroke-width="1" stroke-dasharray="5 3"/>
            <polygon points="0,78 126,5 126,-29 0,44" fill="#1E293B" stroke="#F8FAFC" stroke-width="1.9"/>
            <polygon points="0,78 -126,5 -126,-29 0,44" fill="#1E293B" stroke="#F8FAFC" stroke-width="1.9"/>
            <polygon points="0,44 126,-29 63,-65 -63,8" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.8"/>
            <polygon points="-126,-29 -63,8 -63,-76 -126,-112" fill="#1E293B" stroke="#F8FAFC" stroke-width="1.9"/>
            <polygon points="-126,-112 -63,-76 63,-148 0,-184" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.9"/>
            <polygon points="-63,8 -63,-76 -21,-100 -21,-52 21,-76 21,-124 63,-148 63,-65" fill="#1E293B" stroke="#F8FAFC" stroke-width="1.9"/>
            <polygon points="-21,-52 21,-76 -10,-94 -21,-88" fill="#0284C7" fill-opacity="0.22" stroke="#0284C7" stroke-width="1.4"/>
            <line x1="12" y1="90" x2="138" y2="17" stroke="#D97706" stroke-width="1.1"/>
            <text x="86" y="70" fill="#D97706" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">120</text>
            <line x1="-12" y1="90" x2="-138" y2="17" stroke="#D97706" stroke-width="1.1"/>
            <text x="-96" y="70" fill="#D97706" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">120</text>
          </g>
        </svg>
      `
    },
    {
      id: 'LAM-03',
      title: 'Brida Cilíndrica — Corte Total A-A',
      category: 'cortes',
      categoryLabel: 'Cortes y Secciones',
      scale: '1:1',
      format: 'A3 (297×420)',
      norm: 'ISO 128-40',
      system: 'Corte Total',
      image: 'assets/images/lam-03-corte-brida.jpg',
      description:
        'Planta superior con plano de corte indicado mediante línea de trazo y punto con extremos gruesos (A-A) y vista seccionada completa con rayado a 45° para exponer el alojamiento escalonado y los barrenos de fijación.',
      strokes: [
        'Rayado normalizado a 45° con línea continua fina (0.25 mm) en zonas macizas cortadas.',
        'Plano de corte A-A con extremos engrosados y flechas de dirección de observación.',
        'Círculo primitivo de taladros (Ø 64) en trazo y punto fino.',
        'Los taladros y el agujero central pasante permanecen sin rayado.'
      ],
      svg: `
        <svg viewBox="0 0 480 340" role="img" aria-label="Brida cilíndrica con planta y corte total A-A rayado a 45 grados">
          <defs>
            <pattern id="hatch45" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#0284C7" stroke-width="1.2"/>
            </pattern>
          </defs>
          <rect x="8" y="8" width="464" height="324" fill="#0F172A" stroke="#334155" stroke-width="1"/>
          <g transform="translate(130, 175)">
            <circle cx="0" cy="0" r="82" fill="#1E293B" stroke="#F8FAFC" stroke-width="2"/>
            <circle cx="0" cy="0" r="46" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.6"/>
            <circle cx="0" cy="0" r="24" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.6"/>
            <circle cx="0" cy="0" r="64" fill="none" stroke="#D97706" stroke-width="1" stroke-dasharray="8 3 2 3"/>
            <circle cx="64" cy="0" r="8" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.5"/>
            <circle cx="-64" cy="0" r="8" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.5"/>
            <circle cx="0" cy="64" r="8" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.5"/>
            <circle cx="0" cy="-64" r="8" fill="#0F172A" stroke="#F8FAFC" stroke-width="1.5"/>
            <line x1="-102" y1="0" x2="102" y2="0" stroke="#D97706" stroke-width="1.4" stroke-dasharray="12 3 2 3"/>
          </g>
          <g transform="translate(355, 175)">
            <line x1="0" y1="-108" x2="0" y2="96" stroke="#D97706" stroke-width="1" stroke-dasharray="10 3 2 3"/>
            <polygon points="-82,22 -72,22 -72,58 -82,58" fill="url(#hatch45)" stroke="#F8FAFC" stroke-width="1.8"/>
            <polygon points="-56,22 -46,22 -46,-54 -24,-54 -24,58 -56,58" fill="url(#hatch45)" stroke="#F8FAFC" stroke-width="1.8"/>
            <polygon points="82,22 72,22 72,58 82,58" fill="url(#hatch45)" stroke="#F8FAFC" stroke-width="1.8"/>
            <polygon points="56,22 46,22 46,-54 24,-54 24,58 56,58" fill="url(#hatch45)" stroke="#F8FAFC" stroke-width="1.8"/>
            <line x1="-24" y1="-54" x2="24" y2="-54" stroke="#F8FAFC" stroke-width="1.6"/>
            <line x1="-24" y1="58" x2="24" y2="58" stroke="#F8FAFC" stroke-width="1.6"/>
          </g>
        </svg>
      `
    },
    {
      id: 'LAM-04',
      title: 'Eje Escalonado con Chavetero',
      category: 'planos',
      categoryLabel: 'Planos Mecánicos / Arquitectónicos',
      scale: '1:2',
      format: 'A3 (297×420)',
      norm: 'ISO 2768-m',
      system: 'Fabricación Mecánica',
      image: 'assets/images/lam-04-eje-mecanico.jpg',
      description:
        'Plano de taller para torneado y fresado de un eje de transmisión escalonado. Incluye diámetros con tolerancias de ajuste (h6), chaflanes de entrada 2×45°, chavetero normalizado y sección transversal.',
      strokes: [
        'Eje longitudinal en trazo y punto fino (0.25 mm) como referencia de revolución.',
        'Chaflanes 2×45° en extremos para facilitar el montaje de rodamientos.',
        'Sección abatida lateral mostrando la profundidad exacta del chavetero.',
        'Acotación funcional de diámetros con prefijo Ø y tolerancia ISO.'
      ],
      svg: `
        <svg viewBox="0 0 480 340" role="img" aria-label="Plano mecánico de eje escalonado con chavetero">
          <defs>
            <pattern id="shaftHatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#0284C7" stroke-width="1.1"/>
            </pattern>
          </defs>
          <rect x="8" y="8" width="464" height="324" fill="#0F172A" stroke="#334155" stroke-width="1"/>
          <g transform="translate(36, 165)">
            <line x1="-10" y1="0" x2="310" y2="0" stroke="#D97706" stroke-width="1" stroke-dasharray="12 3 2 3"/>
            <polygon points="0,-24 8,-30 92,-30 92,30 8,30 0,24" fill="#1E293B" stroke="#F8FAFC" stroke-width="1.9"/>
            <rect x="20" y="-10" width="54" height="20" rx="10" fill="#0F172A" stroke="#0284C7" stroke-width="1.6"/>
            <rect x="92" y="-46" width="110" height="92" fill="#1E293B" stroke="#F8FAFC" stroke-width="1.9"/>
            <polygon points="202,-24 282,-24 288,-18 288,18 282,24 202,24" fill="#1E293B" stroke="#F8FAFC" stroke-width="1.9"/>
          </g>
          <g transform="translate(402, 165)">
            <path d="M -10,-32 L -10,-20 L 10,-20 L 10,-32 A 34,34 0 1,1 -10,-32 Z" fill="url(#shaftHatch)" stroke="#F8FAFC" stroke-width="1.8"/>
          </g>
        </svg>
      `
    },
    {
      id: 'LAM-05',
      title: 'Planta Arquitectónica — Módulo Estudio',
      category: 'planos',
      categoryLabel: 'Planos Mecánicos / Arquitectónicos',
      scale: '1:50',
      format: 'A3 (297×420)',
      norm: 'ISO 7519',
      system: 'Planta de Distribución',
      image: 'assets/images/lam-05-planta-arquitectonica.jpg',
      description:
        'Plano arquitectónico a escala 1:50 de un módulo de estudio técnico de 6.00 m × 4.50 m. Representa muros portantes, carpintería de ventanas, arcos de abatimiento de puertas, ejes estructurales y mobiliario fijo.',
      strokes: [
        'Muros cortados en trazo grueso relleno sólido para lectura inmediata del espacio.',
        'Ejes estructurales (A-B / 1-2) con burbujas normalizadas y trazo-punto.',
        'Arcos de abatimiento de puertas a 90° en línea continua fina.',
        'Cadenas de cotas exteriores en metros con tics arquitectónicos a 45°.'
      ],
      svg: `
        <svg viewBox="0 0 480 340" role="img" aria-label="Planta arquitectónica de módulo de estudio a escala 1:50">
          <rect x="8" y="8" width="464" height="324" fill="#0F172A" stroke="#334155" stroke-width="1"/>
          <path d="M 88 74 H 392 V 256 H 194 M 148 256 H 88 V 74" fill="none" stroke="#F8FAFC" stroke-width="8"/>
          <path d="M 278 74 V 164 M 278 206 V 256" fill="none" stroke="#F8FAFC" stroke-width="5"/>
          <rect x="136" y="70" width="94" height="8" fill="#0F172A" stroke="#0284C7" stroke-width="1.4"/>
          <line x1="148" y1="256" x2="148" y2="210" stroke="#D97706" stroke-width="2.2"/>
          <path d="M 148 210 A 46 46 0 0 1 194 256" fill="none" stroke="#D97706" stroke-width="1.1" stroke-dasharray="4 3"/>
          <rect x="112" y="96" width="118" height="46" fill="#1E293B" stroke="#94A3B8" stroke-width="1.2"/>
        </svg>
      `
    },
    {
      id: 'LAM-06',
      title: 'Manguito de Acoplamiento — Semicorte',
      category: 'cortes',
      categoryLabel: 'Cortes y Secciones',
      scale: '2:1',
      format: 'A4 (210×297)',
      norm: 'ISO 128-44',
      system: 'Semicorte Simétrico',
      image: 'assets/images/lam-06-semicorte-manguito.jpg',
      description:
        'Vista en semicorte (corte al cuarto) ideal para piezas de revolución simétricas. La mitad izquierda exhibe la geometría externa con garganta mecanizada, mientras la mitad derecha revela el perfil interior escalonado.',
      strokes: [
        'Eje vertical central de simetría que separa la vista exterior del corte.',
        'Mitad izquierda sin líneas ocultas innecesarias por claridad normativa.',
        'Mitad derecha con rayado a 45° en el espesor macizo de la pared.',
        'Escala de ampliación 2:1 para detallar chaflanes y ranura exterior.'
      ],
      svg: `
        <svg viewBox="0 0 480 340" role="img" aria-label="Semicorte de manguito de acoplamiento simétrico a escala 2:1">
          <defs>
            <pattern id="halfHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#0284C7" stroke-width="1.2"/>
            </pattern>
          </defs>
          <rect x="8" y="8" width="464" height="324" fill="#0F172A" stroke="#334155" stroke-width="1"/>
          <g transform="translate(240, 172)">
            <line x1="0" y1="-124" x2="0" y2="124" stroke="#D97706" stroke-width="1.2" stroke-dasharray="12 3 2 3"/>
            <path d="M 0,-94 H -86 L -94,-86 V -20 H -76 V 20 H -94 V 86 L -86,94 H 0 Z" fill="#1E293B" stroke="#F8FAFC" stroke-width="2"/>
            <polygon points="34,-94 86,-94 94,-86 94,-20 76,-20 76,20 94,20 94,86 86,94 52,94 52,14 34,14" fill="url(#halfHatch)" stroke="#F8FAFC" stroke-width="2"/>
          </g>
        </svg>
      `
    }
  ];

  /* ------------------------------------------------------------------------
     2. MENÚ MÓVIL Y BARRA DE PROGRESO DE LECTURA (TODAS LAS PÁGINAS)
     ------------------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const progressBar = document.getElementById('readingProgressBar');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function updateReadingProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    progressBar.style.width = `${pct.toFixed(1)}%`;
  }

  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  updateReadingProgress();

  /* ------------------------------------------------------------------------
     3. CALCULADORA BIDIRECCIONAL DE ESCALAS (calculadora.html)
     ------------------------------------------------------------------------ */
  const scaleFactorInput = document.getElementById('scaleFactor');
  if (scaleFactorInput) {
    const dirBtns = Array.from(document.querySelectorAll('[data-calc-dir]'));
    const scaleTypeBtns = Array.from(document.querySelectorAll('[data-scale-type]'));
    const presetChips = Array.from(document.querySelectorAll('.preset-chip'));
    const inputUnitSelect = document.getElementById('inputUnit');
    const realDimensionInput = document.getElementById('realDimension');
    const dimensionInputLabel = document.getElementById('dimensionInputLabel');

    const calcScaleLabel = document.getElementById('calcScaleLabel');
    const calcTypeBadge = document.getElementById('calcTypeBadge');
    const outputCaption = document.getElementById('outputCaption');
    const drawingResultMm = document.getElementById('drawingResultMm');
    const drawingResultCm = document.getElementById('drawingResultCm');
    const paperFitStatus = document.getElementById('paperFitStatus');
    const rulerBar = document.getElementById('rulerBar');
    const calcUsageNote = document.getElementById('calcUsageNote');

    let calcDirection = 'real-to-draw';
    let currentScaleType = 'reduccion';

    function getUsageNote(type, factor) {
      if (type === 'natural' || factor === 1) {
        return '<strong>Uso habitual:</strong> Piezas mecánicas medianas y componentes representados a tamaño real exacto.';
      }
      if (type === 'reduccion') {
        if (factor >= 50) return '<strong>Uso habitual:</strong> Planos de arquitectura, plantas de distribución y alzados.';
        if (factor >= 10) return '<strong>Uso habitual:</strong> Detalles constructivos, mobiliario industrial y estructuras metálicas.';
        return '<strong>Uso habitual:</strong> Conjuntos mecánicos, chasis y maquinaria de tamaño medio.';
      }
      return '<strong>Uso habitual:</strong> Microcomponentes electrónicos, relojería y engranajes pequeños de precisión.';
    }

    function updateScaleCalculator() {
      const rawFactor = parseFloat(scaleFactorInput.value);
      const factor = currentScaleType === 'natural' ? 1 : (Number.isFinite(rawFactor) && rawFactor > 0 ? rawFactor : 1);
      const rawVal = parseFloat(realDimensionInput.value);
      const inputVal = Number.isFinite(rawVal) && rawVal >= 0 ? rawVal : 0;

      const unit = inputUnitSelect.value;
      const inputInMm = unit === 'm' ? inputVal * 1000 : unit === 'cm' ? inputVal * 10 : inputVal;

      let scaleRatio = 1;
      let label = '1:1';
      let badge = 'NATURAL';

      if (currentScaleType === 'reduccion') {
        scaleRatio = 1 / factor;
        label = `1:${factor}`;
        badge = 'REDUCCIÓN';
      } else if (currentScaleType === 'ampliacion') {
        scaleRatio = factor;
        label = `${factor}:1`;
        badge = 'AMPLIACIÓN';
      }

      let drawingMm = inputInMm;
      let realMm = inputInMm;

      if (calcDirection === 'real-to-draw') {
        realMm = inputInMm;
        drawingMm = realMm * scaleRatio;
        if (dimensionInputLabel) dimensionInputLabel.textContent = 'MEDIDA REAL DEL OBJETO';
        if (outputCaption) outputCaption.textContent = 'MEDIDA EN EL PLANO (DIBUJO)';
        drawingResultMm.textContent = `${drawingMm.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mm`;
        drawingResultCm.textContent = `= ${(drawingMm / 10).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} cm · Real: ${realMm.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mm`;
      } else {
        drawingMm = inputInMm;
        realMm = drawingMm / scaleRatio;
        if (dimensionInputLabel) dimensionInputLabel.textContent = 'MEDIDA EN EL PLANO (DIBUJO)';
        if (outputCaption) outputCaption.textContent = 'MEDIDA REAL EQUIVALENTE';
        drawingResultMm.textContent = `${(realMm / 1000 >= 1 ? realMm / 1000 : realMm).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${realMm / 1000 >= 1 ? 'm' : 'mm'}`;
        drawingResultCm.textContent = `= ${realMm.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mm · Plano: ${drawingMm.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mm`;
      }

      calcScaleLabel.textContent = `ESCALA: ${label}`;
      calcTypeBadge.textContent = badge;

      const pct = Math.min(100, (drawingMm / 297) * 100);
      rulerBar.style.width = `${pct.toFixed(1)}%`;

      if (drawingMm <= 277) {
        paperFitStatus.textContent = 'CABE EN A4 (CON MÁRGENES)';
        rulerBar.classList.remove('is-overflow');
      } else if (drawingMm <= 400) {
        paperFitStatus.textContent = 'REQUIERE FORMATO A3';
        rulerBar.classList.add('is-overflow');
      } else {
        paperFitStatus.textContent = 'REQUIERE A2 / A1 O MAYOR REDUCCIÓN';
        rulerBar.classList.add('is-overflow');
      }

      calcUsageNote.innerHTML = getUsageNote(currentScaleType, factor);
    }

    function syncActivePreset() {
      const f = parseFloat(scaleFactorInput.value);
      presetChips.forEach((chip) => {
        const matches = chip.dataset.type === currentScaleType && parseFloat(chip.dataset.factor) === f;
        chip.classList.toggle('is-active', matches);
      });
    }

    dirBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        calcDirection = btn.dataset.calcDir;
        dirBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        if (calcDirection === 'draw-to-real' && inputUnitSelect.value === 'm') {
          inputUnitSelect.value = 'mm';
          realDimensionInput.value = '120';
        }
        updateScaleCalculator();
      });
    });

    scaleTypeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentScaleType = btn.dataset.scaleType;
        scaleTypeBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        if (currentScaleType === 'natural') {
          scaleFactorInput.value = '1';
          scaleFactorInput.disabled = true;
        } else {
          scaleFactorInput.disabled = false;
          if (parseFloat(scaleFactorInput.value) === 1) {
            scaleFactorInput.value = currentScaleType === 'reduccion' ? '50' : '2';
          }
        }
        syncActivePreset();
        updateScaleCalculator();
      });
    });

    presetChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        currentScaleType = chip.dataset.type;
        scaleFactorInput.disabled = currentScaleType === 'natural';
        scaleFactorInput.value = chip.dataset.factor;
        scaleTypeBtns.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.scaleType === currentScaleType));
        syncActivePreset();
        updateScaleCalculator();
      });
    });

    [scaleFactorInput, inputUnitSelect, realDimensionInput].forEach((el) => {
      el.addEventListener('input', () => {
        syncActivePreset();
        updateScaleCalculator();
      });
    });

    updateScaleCalculator();
  }

  /* ------------------------------------------------------------------------
     4. GALERÍA Y MODAL CON CONMUTADOR IMAGEN HD / SVG (galeria.html e index.html)
     ------------------------------------------------------------------------ */
  const galleryGrid = document.getElementById('galleryGrid');
  const homeFeaturedGallery = document.getElementById('homeFeaturedGallery');
  const modal = document.getElementById('plateModal');

  if (galleryGrid || homeFeaturedGallery) {
    const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
    const modalCode = document.getElementById('modalCode');
    const modalCategory = document.getElementById('modalCategory');
    const modalSvgStage = document.getElementById('modalSvgStage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalScale = document.getElementById('modalScale');
    const modalFormat = document.getElementById('modalFormat');
    const modalNorm = document.getElementById('modalNorm');
    const modalSystem = document.getElementById('modalSystem');
    const modalStrokesList = document.getElementById('modalStrokesList');

    const modalModeBtn = document.getElementById('modalModeBtn');
    const modalZoomBtn = document.getElementById('modalZoomBtn');
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    let visiblePlates = [...PLATES];
    let currentModalIndex = 0;
    let modalViewMode = 'image'; // 'image' | 'svg'

    function createCardHTML(plate, idx) {
      return `
        <article class="plate-card" tabindex="0" role="button" data-plate-index="${idx}" aria-label="Abrir lámina ${plate.title}">
          <div class="plate-card__preview">
            <span class="plate-card__code mono">${plate.id}</span>
            <img class="plate-card__img" src="${plate.image}" alt="${plate.title}" loading="lazy" />
            <span class="plate-card__expand mono">AMPLIAR ↗</span>
          </div>
          <div class="plate-card__body">
            <span class="plate-card__cat mono">${plate.categoryLabel}</span>
            <h3 class="plate-card__title">${plate.title}</h3>
            <div class="plate-card__meta mono">
              <span>ESC. <strong>${plate.scale}</strong></span>
              <span>FMT. <strong>${plate.format.split(' ')[0]}</strong></span>
              <span>${plate.norm}</span>
            </div>
          </div>
        </article>
      `;
    }

    function bindCards(container) {
      container.querySelectorAll('.plate-card').forEach((card) => {
        const openHandler = () => openModal(Number(card.dataset.plateIndex));
        card.addEventListener('click', openHandler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openHandler();
          }
        });
      });
    }

    function renderGallery(filter) {
      if (!galleryGrid) return;
      visiblePlates = filter === 'all' ? [...PLATES] : PLATES.filter((p) => p.category === filter);
      galleryGrid.innerHTML = visiblePlates.map((plate, idx) => createCardHTML(plate, idx)).join('');
      bindCards(galleryGrid);
    }

    function renderModalVisual(plate) {
      if (modalViewMode === 'svg') {
        modalSvgStage.innerHTML = plate.svg
          .replace(/id="([^"]+)"/g, 'id="modal-$1"')
          .replace(/url\(#([^)]+)\)/g, 'url(#modal-$1)');
        if (modalModeBtn) {
          modalModeBtn.textContent = 'VER IMAGEN HD';
          modalModeBtn.setAttribute('aria-pressed', 'true');
        }
      } else {
        modalSvgStage.innerHTML = `<img src="${plate.image}" alt="${plate.title}" />`;
        if (modalModeBtn) {
          modalModeBtn.textContent = 'VER PLANO SVG';
          modalModeBtn.setAttribute('aria-pressed', 'false');
        }
      }
    }

    function populateModal(index) {
      if (!visiblePlates.length || !modal) return;
      currentModalIndex = (index + visiblePlates.length) % visiblePlates.length;
      const plate = visiblePlates[currentModalIndex];

      modalCode.textContent = plate.id;
      modalCategory.textContent = plate.categoryLabel.toUpperCase();
      modalViewMode = 'image';
      renderModalVisual(plate);

      modalSvgStage.classList.remove('is-zoomed');
      modalZoomBtn.setAttribute('aria-pressed', 'false');
      modalZoomBtn.textContent = 'ZOOM 100%';

      modalTitle.textContent = plate.title;
      modalDescription.textContent = plate.description;
      modalScale.textContent = plate.scale;
      modalFormat.textContent = plate.format;
      modalNorm.textContent = plate.norm;
      modalSystem.textContent = plate.system;
      modalStrokesList.innerHTML = plate.strokes.map((s) => `<li>${s}</li>`).join('');
    }

    function openModal(index) {
      populateModal(index);
      modal.hidden = false;
      document.body.classList.add('modal-open');
      modalCloseBtn.focus();
    }

    function closeModal() {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
    }

    if (modalModeBtn) {
      modalModeBtn.addEventListener('click', () => {
        modalViewMode = modalViewMode === 'image' ? 'svg' : 'image';
        renderModalVisual(visiblePlates[currentModalIndex]);
      });
    }

    if (modalZoomBtn) {
      modalZoomBtn.addEventListener('click', () => {
        const zoomed = modalSvgStage.classList.toggle('is-zoomed');
        modalZoomBtn.setAttribute('aria-pressed', String(zoomed));
        modalZoomBtn.textContent = zoomed ? 'ZOOM 145%' : 'ZOOM 100%';
      });
    }

    if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => populateModal(currentModalIndex - 1));
    if (modalNextBtn) modalNextBtn.addEventListener('click', () => populateModal(currentModalIndex + 1));
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });

      document.addEventListener('keydown', (e) => {
        if (modal.hidden) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') populateModal(currentModalIndex - 1);
        if (e.key === 'ArrowRight') populateModal(currentModalIndex + 1);
      });
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        renderGallery(btn.dataset.filter);
      });
    });

    if (galleryGrid) {
      renderGallery('all');
    }

    if (homeFeaturedGallery) {
      visiblePlates = PLATES.slice(0, 3);
      homeFeaturedGallery.innerHTML = visiblePlates.map((plate, idx) => createCardHTML(plate, idx)).join('');
      bindCards(homeFeaturedGallery);
    }
  }

  /* ------------------------------------------------------------------------
     5. LÍNEA DE TIEMPO INTERACTIVA (historia.html)
     ------------------------------------------------------------------------ */
  const eraPills = Array.from(document.querySelectorAll('.era-pill'));
  const timelineItems = Array.from(document.querySelectorAll('.timeline-item'));

  if (timelineItems.length) {
    function toggleTimelineItem(item, forceOpen) {
      const willOpen = typeof forceOpen === 'boolean' ? forceOpen : !item.classList.contains('is-open');
      item.classList.toggle('is-open', willOpen);
      const btn = item.querySelector('.timeline-toggle');
      if (btn) {
        btn.setAttribute('aria-expanded', String(willOpen));
        btn.querySelector('span:first-child').textContent = willOpen ? 'Ocultar aporte técnico' : 'Ver aporte técnico';
        btn.querySelector('.toggle-sign').textContent = willOpen ? '−' : '+';
      }
    }

    timelineItems.forEach((item) => {
      const toggleBtn = item.querySelector('.timeline-toggle');
      if (toggleBtn) toggleBtn.addEventListener('click', () => toggleTimelineItem(item));
    });

    eraPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const targetEra = pill.dataset.era;
        eraPills.forEach((p) => p.classList.toggle('is-active', p === pill));
        timelineItems.forEach((item) => {
          const isMatch = item.dataset.era === targetEra;
          toggleTimelineItem(item, isMatch);
          if (isMatch) item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. PESTAÑAS INTERACTIVAS DE APLICACIONES (aplicaciones.html)
     ------------------------------------------------------------------------ */
  const appTabs = Array.from(document.querySelectorAll('.app-tab'));
  const appPanels = Array.from(document.querySelectorAll('.app-panel'));

  if (appTabs.length) {
    function activateAppTab(tab) {
      const targetId = tab.getAttribute('aria-controls');
      appTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      appPanels.forEach((panel) => {
        const match = panel.id === targetId;
        panel.hidden = !match;
        panel.classList.toggle('is-active', match);
      });
    }

    appTabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => activateAppTab(tab));
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const next = appTabs[(idx + 1) % appTabs.length];
          next.focus();
          activateAppTab(next);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = appTabs[(idx - 1 + appTabs.length) % appTabs.length];
          prev.focus();
          activateAppTab(prev);
        }
      });
    });
  }
})();
