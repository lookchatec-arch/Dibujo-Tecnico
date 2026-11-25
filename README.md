# Atlas de Dibujo Técnico — Sitio Web Educativo y de Referencia

Sitio web educativo multipágina sobre **Dibujo Técnico**, diseñado con una estética de plano arquitectónico (*blueprint* moderno) y cuaderno técnico de ingeniería. Construido íntegramente con **HTML5 semántico, CSS3 moderno (variables, Flexbox/Grid, tonos sólidos sin degradados) y JavaScript Vanilla**, sin dependencias externas ni pasos de compilación.

---

## 1. Identidad Visual y Sistema de Diseño (UI/UX)

- **Estética:** Técnica, limpia y precisa, inspirada en planos normalizados y cuadrículas de trazado de `1px`.
- **Paleta de colores sólidos (sin degradados):**
  | Rol | Color | Código Hex |
  | :--- | :--- | :---: |
  | Base técnica / *Blueprint* | Azul marino técnico | `#0F172A` |
  | Superficie elevada oscura | Azul pizarra oscuro | `#1E293B` |
  | Área de lectura | Blanco papel | `#F8FAFC` |
  | Trazos y bordes finos (`1px`) | Gris pizarra | `#334155` |
  | Acento principal / CTA | Azul cian técnico | `#0284C7` |
  | Acento secundario / Cotas | Dorado técnico | `#D97706` |
- **Tipografía:**
  - **Textos y títulos:** `Inter` (sans-serif geométrica).
  - **Cotas, códigos, escalas y etiquetas técnicas:** `JetBrains Mono` (monoespaciada).
- **Navegación:** Barra superior fija (*sticky*) con enlace directo a las 6 páginas, indicador de página activa (`PÁG: 0X/06`), barra superior de progreso de lectura en tiempo real y menú hamburguesa 100% responsivo para móviles y tablets.

---

## 2. Arquitectura Multipágina

Cada opción del menú y cada segmento técnico cuenta con su propia página dedicada:

| # | Archivo | Módulo / Página | Contenido y Funcionalidades |
| :-: | :--- | :--- | :--- |
| `01` | `index.html` | **Inicio** | *Hero* técnico con ilustración de mesa de trazado, índice interactivo hacia todos los módulos del atlas y vista previa de 3 láminas destacadas con lightbox. |
| `02` | `pilares.html` | **Pilares Fundamentales** | Normalización ISO/DIN, Escalas y Acotación, Geometría Descriptiva, tabla gráfica del **Alfabeto de Líneas (ISO 128)**, tabla de **Formatos A0–A4 (ISO 216)** y comparativa visual **Sistema Europeo (ISO-E) vs. Americano (ISO-A)**. |
| `03` | `calculadora.html` | **Calculadora de Escalas** | Conversor bidireccional (**Medida Real → Plano** y **Plano → Real**) para escalas Natural (`1:1`), Reducción (`1:X`) y Ampliación (`X:1`), atajos normalizados (`1:100` a `10:1`), selector `mm/cm/m`, barra comparativa de ajuste sobre formato A4/A3 y tabla **ISO 5455**. |
| `04` | `galeria.html` | **Galería de Láminas y Planos** | Cuadrícula responsiva con filtros por categoría (*Todas*, *Vistas Ortogonales*, *Perspectiva Isométrica*, *Cortes y Secciones*, *Planos Mecánicos/Arquitectónicos*) y **Lightbox con Cajetín Técnico** (conmutador **Imagen HD / Plano SVG**, zoom `100% / 145%`, navegación con teclado `Esc`, `←`, `→`). |
| `05` | `historia.html` | **Historia del Arte y del Dibujo** | Ilustraciones editoriales (Renacimiento y CAD/BIM) + **Línea de Tiempo vertical interactiva** con navegación rápida por época y paneles desplegables desde Mesopotamia (Estatua de Gudea) y Egipto hasta Brunelleschi, Leonardo da Vinci, Gaspard Monge, normas DIN/ISO, CAD y BIM. |
| `06` | `aplicaciones.html` | **Aplicaciones Industriales** | Pestañas accesibles (con soporte de teclado) para **Ingeniería Mecánica e Industrial**, **Arquitectura y Construcción**, **Electrónica y Mecatrónica** y **Diseño de Producto**. Cada disciplina incluye imagen dedicada, esquema vectorial SVG, normas aplicables y una matriz comparativa final. |

---

## 3. Estructura de Archivos del Proyecto

```text
Proyecto Dibujo Tecnico/
├── index.html                           # Página 01: Inicio y hub de navegación
├── pilares.html                         # Página 02: Fundamentos, líneas ISO 128 y formatos
├── calculadora.html                     # Página 03: Calculadora bidireccional ISO 5455
├── galeria.html                         # Página 04: Galería filtrable + Lightbox con cajetín
├── historia.html                        # Página 05: Línea de tiempo interactiva
├── aplicaciones.html                    # Página 06: Aplicaciones por sector industrial
├── styles.css                           # Hoja de estilos CSS3 compartida (blueprint sólido)
├── script.js                            # Lógica JS Vanilla modular para todas las páginas
├── README.md                            # Documentación del proyecto
└── assets/
    └── images/
        ├── hero-blueprint.jpg           # Visual principal del Hero (Inicio)
        ├── lam-01-ortogonales.jpg       # Lámina 01: Soporte en L (Vistas Ortogonales ISO-E)
        ├── lam-02-isometrica.jpg        # Lámina 02: Bloque escalonado (Perspectiva Isométrica)
        ├── lam-03-corte-brida.jpg       # Lámina 03: Brida cilíndrica (Corte Total A-A)
        ├── lam-04-eje-mecanico.jpg      # Lámina 04: Eje escalonado con chavetero
        ├── lam-05-planta-arquitectonica.jpg  # Lámina 05: Planta arquitectónica 1:50
        ├── lam-06-semicorte-manguito.jpg     # Lámina 06: Manguito en semicorte 2:1
        ├── historia-renacimiento.jpg    # Ilustración editorial: Renacimiento y perspectiva
        ├── historia-cad-bim.jpg         # Ilustración editorial: Modelado 3D CAD y BIM
        ├── app-mecanica.jpg             # Aplicación: Ingeniería Mecánica y CNC
        ├── app-arquitectura.jpg         # Aplicación: Arquitectura y Construcción
        ├── app-electronica.jpg          # Aplicación: Electrónica y PCB
        └── app-producto.svg             # Aplicación: Diseño de Producto (vectorial técnico)
```

---

## 4. Componentes Interactivos (`script.js`)

El archivo `script.js` está encapsulado en una IIFE (`(() => { 'use strict'; ... })()`) y detecta dinámicamente los módulos presentes en cada página:

1. **Navegación y Progreso de Lectura:** Controla el menú responsivo móvil (`aria-expanded`) y actualiza la barra superior según el desplazamiento vertical.
2. **Calculadora Bidireccional ISO 5455:** Recalcula instantáneamente las dimensiones al cambiar dirección, tipo de escala, factor, unidad (`mm`, `cm`, `m`) o valor numérico, evaluando automáticamente si la medida cabe en `A4`, `A3` o formatos superiores.
3. **Galería Dinámica y Lightbox Dual (HD + SVG):** Renderiza las láminas desde el catálogo `PLATES`, filtra por categoría en vivo y gestiona el modal accesible (`role="dialog"`, `aria-modal="true"`) permitiendo alternar entre la lámina en alta resolución y su equivalente vectorial SVG con prefijado automático de IDs de patrones.
4. **Línea de Tiempo Interactiva:** Permite saltar suavemente a cada época histórica y expandir/contraer los bloques de *Aporte Técnico Clave*.
5. **Pestañas de Aplicaciones:** Implementa el patrón ARIA `tablist` / `tabpanel` con navegación por teclado (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`).

---

## 5. Normas Técnicas Referenciadas

- **ISO 128:** Principios generales de representación, vistas, cortes y alfabeto de líneas.
- **ISO 129:** Principios generales de acotación.
- **ISO 216 / ISO 5457:** Formatos de papel de la serie A (`A0`–`A4`) y márgenes normalizados.
- **ISO 5455:** Escalas normalizadas de reducción, natural y ampliación.
- **ISO 286 / ISO 1101 / ISO 2768-m:** Tolerancias dimensionales y geométricas (GD&T).
- **ISO 7519 / ISO 19650:** Dibujo de construcción y metodología BIM.
- **IEC 60617 / IPC-2221:** Simbología esquemática electrónica y diseño de PCB.

---

## 6. Ejecución Local y Despliegue

### Abrir localmente
No requiere instalación de paquetes ni servidor obligatorio:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/lookchatec-arch/Dibujo-Tecnico.git
   ```
2. Abre `index.html` directamente en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).

### Publicar en GitHub Pages
1. Ve a **Settings → Pages** en el repositorio de GitHub.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`, luego haz clic en **Save**.

---

## 7. Tecnologías Utilizadas

- **HTML5** semántico y accesible (ARIA).
- **CSS3** (Custom Properties, Grid, Flexbox, diseño responsivo sin frameworks ni degradados).
- **JavaScript Vanilla (ES6+)**.
- **SVG** vectorial técnico integrado e imágenes *blueprint* en alta resolución.
