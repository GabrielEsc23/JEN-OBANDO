# Guía de diseño UI --- Jen Obando

**Versión:** 1.0\
**Dirección de arte:** Organic Editorial\
**Uso:** referencia de diseño para implementar la landing page con CSS.

> Esta guía convierte el primer concepto visual en decisiones prácticas
> de diseño. Los valores hexadecimales, tamaños y radios son una
> propuesta de implementación coherente con la referencia visual; no son
> mediciones extraídas del mockup.

## 1. Identidad visual

-   **Estilo:** Organic Editorial / Nature-inspired Luxury.
-   **Personalidad:** íntima, elegante, natural, emocional y
    sofisticada.
-   **Contraste:** fondos claros y cálidos alternados con bloques verde
    bosque oscuro.
-   **Composición:** editorial, asimétrica, con fotografías grandes y
    recortes orgánicos.
-   **Decoración:** líneas botánicas finas, curvas, contornos
    irregulares y detalles dorados discretos.
-   **Principio fundamental:** la extravagancia debe venir de la
    composición y la fotografía, no de saturar la interfaz.

## 2. Paleta de colores

  Token          HEX         Uso
  -------------- ----------- ------------------------------------------------
  Cream Canvas   `#F5F0E7`   Fondo principal
  Warm Ivory     `#FBF8F2`   Tarjetas y superficies claras
  Forest Green   `#172A21`   Secciones oscuras
  Deep Moss      `#263B2D`   Fondos secundarios y degradados
  Muted Gold     `#B89A6A`   Líneas, números y detalles
  Earth Brown    `#956B4E`   Botones secundarios y acentos
  Charcoal       `#292923`   Texto principal
  Soft Gray      `#77746C`   Texto secundario
  White          `#FFFFFF`   Texto sobre fondos oscuros y contraste puntual

### Distribución recomendada

-   55--65 % de superficies crema e ivory.
-   20--25 % de verde bosque.
-   10--15 % de fotografía y texturas naturales.
-   5 % o menos de dorado y terracota.

Son proporciones orientativas, no reglas rígidas. Comprueba siempre el
contraste de texto y controles, especialmente sobre fotografías.

## 3. Tipografía

### Pareja recomendada

**Titulares:** `Cormorant Garamond`\
Elegante, expresiva y editorial; úsala para H1, H2, citas y títulos de
tarjetas.

**Texto de interfaz:** `DM Sans`\
Limpia y contemporánea; úsala en párrafos, navegación, botones,
etiquetas y metadatos.

Alternativa de titulares: `Playfair Display`. Evita combinar demasiadas
familias: dos son suficientes.

### Escala tipográfica de escritorio

  Elemento                                       Tamaño   Line-height       Peso
  -------------------- -------------------------------- ------------- ----------
  H1 hero                  `clamp(3rem, 5.2vw, 5.5rem)`    0.98--1.08        400
  H2 de sección          `clamp(2.2rem, 3.4vw, 3.6rem)`    1.05--1.15        400
  H3                                   `1.45rem–1.8rem`          1.15   400--500
  Texto principal                       `1rem–1.125rem`     1.65--1.8        400
  Texto secundario                   `0.875rem–0.95rem`     1.55--1.7        400
  Eyebrow / etiqueta                  `0.68rem–0.75rem`           1.4        600
  Navegación                            `0.8rem–0.9rem`           1.4        500
  Botones                             `0.85rem–0.95rem`           1.2        500

Las etiquetas pequeñas pueden usar mayúsculas y
`letter-spacing: 0.16em`. No uses tracking amplio en párrafos normales.

### Reglas de uso

-   Limita los párrafos a aproximadamente `55–65ch` para facilitar la
    lectura.
-   Usa cursiva solo en fragmentos intencionales, como "está en volver a
    sentir".
-   Evita titulares enteros en mayúsculas.
-   No reduzcas demasiado el texto secundario: debe seguir siendo
    legible en móviles.

## 4. Sistema de espaciado

Usa una escala consistente basada en múltiplos de 4 px.

  Token            Valor
  ------------ ---------
  `space-1`        `4px`
  `space-2`        `8px`
  `space-3`       `12px`
  `space-4`       `16px`
  `space-5`       `24px`
  `space-6`       `32px`
  `space-7`       `48px`
  `space-8`       `64px`
  `space-9`       `88px`
  `space-10`     `112px`

-   Padding horizontal del contenido: `clamp(1.25rem, 5.5vw, 6rem)`.
-   Padding vertical de secciones: `clamp(4rem, 8vw, 8rem)`.
-   Separación entre título y contenido: `1.5rem–2.5rem`.
-   Separación entre tarjetas: `1rem–1.5rem`.
-   Mantén zonas vacías alrededor de los titulares: el espacio negativo
    forma parte del diseño.

## 5. Contenedores, bordes y radios

### Anchos

-   Contenedor principal: `max-width: 1440px`.
-   Contenedor de lectura: `max-width: 720px`.
-   Padding lateral fluido: `clamp(20px, 5vw, 88px)`.
-   Las secciones de fondo pueden ocupar el ancho completo; el contenido
    interno debe alinearse a la misma retícula.

### Bordes

-   Bordes de tarjetas claras: `1px solid rgba(41, 41, 35, 0.08)`.
-   Separadores: `1px solid rgba(184, 154, 106, 0.45)`.
-   Contornos decorativos: entre `1px` y `1.5px`, en dorado apagado o
    verde.
-   Evita bordes gruesos y sombras negras intensas.

### Radios sugeridos

  Elemento                 Radio
  ------------------------ -------------------------------------
  Botones tipo píldora     `999px`
  Tarjetas                 `16px–24px`
  Imágenes rectangulares   `20px–28px`
  Recortes orgánicos       `38% 62% 55% 45% / 42% 38% 62% 58%`
  Campos de formulario     `10px–14px`

No redondees todos los elementos de la misma forma. La mezcla de
tarjetas moderadas y fotografías orgánicas es parte del lenguaje visual.

## 6. Sombras, transparencias y texturas

-   Tarjetas: `0 12px 32px rgba(31, 38, 30, 0.06)`.
-   Elementos flotantes: `0 18px 50px rgba(20, 30, 23, 0.12)`.
-   Líneas decorativas: opacidad de `0.35–0.7`.
-   Textura de grano: opcional y muy sutil, con una imagen de ruido
    optimizada o una capa SVG; no debe dificultar la lectura.
-   Evita `backdrop-filter` excesivo y grandes sombras difusas en cada
    componente.

## 7. Dirección fotográfica

Las imágenes son esenciales para que el diseño funcione.

### Qué buscar o producir

-   Retratos naturales, con luz lateral o contraluz cálido.
-   Mujeres en momentos de pausa, introspección o conexión con la
    naturaleza.
-   Texturas reales: hojas, madera, piedra, telas y luz entrando por una
    ventana.
-   Espacios de terapia acogedores, sin apariencia clínica fría.
-   Fotografía del espacio real de El Porvenir, si está disponible.

### Tratamiento visual

-   Temperatura cálida, verdes profundos y contraste moderado.
-   Evita saturación excesiva, filtros anaranjados fuertes o imágenes de
    stock demasiado posadas.
-   Usa `object-fit: cover` y define `object-position` por imagen.
-   Mantén un mismo tratamiento cromático en toda la página.
-   Prioriza fotografías auténticas de Jen para la sección personal. No
    presentes imágenes de stock como si fueran ella o su espacio real.

### Recortes orgánicos

Los recortes pueden implementarse con `border-radius` asimétrico o
`clip-path: path()`/`clip-path: polygon()`. Para formas complejas y
responsivas, suele ser más práctico un SVG como máscara. Comprueba
compatibilidad y ofrece un fallback sencillo.

## 8. Navegación

-   Barra superior transparente o sobre el fondo crema.
-   Logotipo a la izquierda; enlaces centrales o alineados a la derecha;
    CTA destacado al extremo derecho.
-   Altura aproximada: `76px–96px` en escritorio.
-   Tipografía pequeña, con bastante espacio entre enlaces.
-   Enlaces sin subrayado permanente; subrayado fino o cambio de color
    en hover.
-   Botón principal verde bosque, texto ivory y forma píldora.
-   Si la barra es sticky, usa un fondo sólido o semitransparente al
    desplazarse para preservar el contraste.

En móvil, sustituye la navegación completa por un menú accesible. El
botón debe tener nombre accesible, estado expandido y foco visible.

## 9. Hero principal

### Composición

-   Sección inicial de aproximadamente `min-height: 680px` en
    escritorio, adaptada al contenido.
-   Layout de dos columnas: texto a la izquierda y fotografía a la
    derecha.
-   Proporción orientativa: `0.9fr 1.1fr`.
-   El texto debe quedar visualmente anclado a la izquierda, con un
    ancho limitado.
-   Fotografía amplia, con recorte orgánico y presencia visual
    dominante.
-   Añade una etiqueta pequeña: "JEN OBANDO · TERAPEUTA EMOCIONAL".
-   Titular: "El secreto no está en entenderlo todo... está en volver a
    sentir."
-   Descripción breve y un CTA primario: "Agendar una consulta".
-   Una frase secundaria o detalle botánico puede aparecer sobre el
    espacio libre de la imagen, sin competir con el titular.

### Detalles

-   H1 con serif, interlineado compacto y ancho máximo aproximado de
    `11–13ch`.
-   Resalta la última frase con cursiva, sin cambiar a una tipografía
    decorativa difícil de leer.
-   Evita centrar todo: la asimetría editorial aporta carácter.
-   El primer CTA debe aparecer sin necesidad de desplazarse en
    pantallas de escritorio habituales.

## 10. Sección "¿Qué es la Terapia Gestalt Integrativa?"

-   Fondo `Cream Canvas`.
-   Diseño de dos columnas: fotografía o ilustración a un lado y texto
    al otro.
-   Titular serif y párrafo corto con ancho controlado.
-   Una forma orgánica puede contener la fotografía; una ilustración
    lineal puede equilibrar el lado opuesto.
-   CTA secundario: "Conoce mi enfoque".
-   No conviertas el texto en un bloque demasiado largo: conserva la
    explicación del documento y facilita su lectura.

## 11. Los tres pilares

Pilares: 1. Consciencia corporal. 2. Presencia plena. 3. Coherencia
integrativa.

### Tratamiento

-   Fondo `Forest Green`.
-   Texto en `Warm Ivory`.
-   Tres columnas equilibradas en escritorio.
-   Números `01`, `02`, `03` en `Muted Gold`.
-   Iconos lineales finos, coherentes entre sí.
-   Separadores verticales de baja opacidad entre columnas.
-   Padding amplio y párrafos cortos.

En móvil, apila los pilares y cambia los separadores verticales por
separadores horizontales, si hacen falta.

## 12. Herramientas terapéuticas

Herramientas: - Hakomi --- Escucha somática. - Focusing --- Sensación
sentida. - Terapia Centrada en la Persona. - IFS --- Sistemas Familiares
Internos.

### Diseño

-   Fondo claro o una transición desde el bloque verde oscuro.
-   Cuadrícula de dos columnas en escritorio.
-   Tarjetas con fondos ivory, verde muy pálido o beige cálido.
-   Radio de `16px–24px`.
-   Iconos lineales o imágenes de detalle con una proporción uniforme.
-   Número de orden pequeño y etiqueta/título serif.
-   Descripción en sans serif, con interlineado cómodo.

No dependas solo del color para distinguir las tarjetas. Mantén la
jerarquía consistente y el contenido legible.

## 13. Sobre Jen

Esta sección debe sentirse más personal que comercial.

-   Composición asimétrica: fotografía grande a la izquierda y cita con
    contenido a la derecha.
-   Usa una forma orgánica para la imagen y una línea botánica como
    detalle, no como decoración dominante.
-   Presenta la cita sobre su experiencia como cuidadora primaria con
    tipografía serif y ancho limitado.
-   Debajo, organiza las cuatro cualidades en una cuadrícula de dos
    columnas:
    -   Escucha sin ruido propio.
    -   Sintonía con lo que sientes.
    -   La pregunta exacta.
    -   Sostener sin prisa por arreglar.
-   Iconos discretos y títulos cortos.
-   Deja aire entre la cita y las cualidades.

## 14. Servicios

Tres opciones: 1. Charlas de Desarrollo Humano --- 60--90 minutos. 2.
Talleres Terapéuticos --- 3 horas, grupos de 6 a 10 personas. 3. Terapia
Individual --- 60--75 minutos, presencial o virtual.

### Tarjetas

-   Tres columnas en escritorio.
-   Imagen horizontal arriba, contenido debajo.
-   Fondo ivory, borde tenue y sombra suave.
-   Radio de `18px–24px`.
-   Número de orden pequeño.
-   Nombre serif, duración en texto secundario y descripción breve.
-   Botón al final de cada tarjeta, alineado consistentemente.

### CTA

-   Charlas: "Solicitar información".
-   Talleres: "Ver próximas fechas".
-   Terapia individual: "Agendar una consulta".

Los botones deben llevar a destinos reales: WhatsApp, formulario o
sistema de agenda. No dejes enlaces de muestra en producción.

## 15. El Porvenir y contacto

-   Bloque de cierre con fotografía real del entorno, si Jen puede
    facilitarla.
-   Fondo verde bosque o imagen panorámica con una capa oscura para
    garantizar contraste.
-   Texto: "El Porvenir --- Guayaquil, Ecuador".
-   Breve explicación del espacio rodeado de naturaleza, silencio y paz.
-   Enlaces visibles a Instagram `@jenobando`, WhatsApp directo, web y
    newsletter.
-   Footer oscuro con logotipo, descripción breve y enlaces esenciales.

No inventes la URL de WhatsApp, el enlace de newsletter ni otros
destinos. Solicita los enlaces reales antes de publicar.

## 16. Botones y estados interactivos

### Botón primario

-   Fondo: `Forest Green`.
-   Texto: `Warm Ivory`.
-   Radio: `999px`.
-   Padding: `14px 24px` como punto de partida.
-   Flecha opcional a la derecha, separada del texto.
-   Transición: `180ms–240ms ease`.
-   Hover: aclarar ligeramente el verde o desplazar la flecha unos
    píxeles.
-   Active: reducir sutilmente la escala, por ejemplo
    `transform: scale(0.98)`.
-   Focus: outline visible de `2px` con separación suficiente.
-   Disabled: reducir contraste sin volver ilegible la etiqueta.

### Botón secundario

-   Fondo transparente o ivory.
-   Borde de `1px solid rgba(149, 107, 78, 0.35)`.
-   Texto `Charcoal`.
-   En hover, usar un fondo beige más marcado.

No uses el color como única señal de interacción y asegúrate de que los
controles funcionen también con teclado.

## 17. Movimiento y animaciones

-   Entrada de contenido: opacidad y desplazamiento vertical de
    `12px–20px`.
-   Duración habitual: `450ms–700ms`.
-   Curva: `cubic-bezier(0.22, 1, 0.36, 1)`.
-   Animación de hover de botones: `180ms–240ms`.
-   Parallax: opcional, muy leve y solo si no perjudica rendimiento ni
    accesibilidad.
-   No animes cada párrafo o tarjeta de forma independiente si produce
    una experiencia lenta o recargada.
-   Respeta `prefers-reduced-motion: reduce` y elimina movimientos no
    esenciales cuando esté activo.

## 18. Responsive design

### Breakpoints de referencia

  Nombre                             Ancho
  ----------------- ----------------------
  Móvil pequeño              hasta `480px`
  Móvil grande               `481px–767px`
  Tablet                    `768px–1023px`
  Escritorio               `1024px–1439px`
  Pantalla amplia     `1440px` en adelante

Puedes adaptar los breakpoints a tu sistema de diseño. No son límites
universales.

### Móvil

-   Una sola columna en el hero; texto primero y fotografía después,
    salvo que las pruebas visuales indiquen lo contrario.
-   H1 fluido, por ejemplo `clamp(2.8rem, 12vw, 4rem)`.
-   Navegación con menú accesible.
-   Pilares, herramientas y servicios apilados o en una cuadrícula de
    una columna.
-   Botones con altura mínima aproximada de `44px`.
-   Padding lateral de `20px–24px`.
-   Evita recortes orgánicos que oculten caras o contenido importante.
-   Desactiva parallax pesado y movimientos innecesarios.

### Tablet

-   Reduce el padding de secciones.
-   Permite dos columnas en herramientas y servicios si el contenido
    conserva suficiente anchura.
-   Revisa el punto de quiebre del hero para evitar columnas demasiado
    estrechas.

### Escritorio

-   Aprovecha el espacio horizontal, pero limita el ancho del texto.
-   Mantén una retícula común entre las distintas secciones.
-   Evita que los párrafos se extiendan de extremo a extremo.
-   Las imágenes pueden sobresalir visualmente de su columna si no
    generan desbordamiento ni dificultan la navegación.

## 19. Accesibilidad y rendimiento

-   Usa HTML semántico: `header`, `nav`, `main`, `section`, `article` y
    `footer`.
-   Un solo H1 principal; jerarquía de encabezados coherente.
-   Texto alternativo útil para imágenes informativas; `alt=""` para
    imágenes puramente decorativas.
-   Contraste adecuado para texto y controles.
-   Foco de teclado visible.
-   Enlaces y botones con nombres descriptivos.
-   Carga diferida (`loading="lazy"`) para imágenes fuera del primer
    viewport; no retrases innecesariamente la imagen principal.
-   Usa AVIF o WebP cuando convenga y define `width`/`height` para
    evitar saltos de layout.
-   Precarga solo los recursos críticos, como la fuente usada en el
    hero, cuando las métricas lo justifiquen.
-   Comprueba Core Web Vitals y el comportamiento en un móvil real.

## 20. Variables CSS iniciales

``` css
:root {
  /* Colors */
  --color-cream: #F5F0E7;
  --color-ivory: #FBF8F2;
  --color-forest: #172A21;
  --color-moss: #263B2D;
  --color-gold: #B89A6A;
  --color-earth: #956B4E;
  --color-charcoal: #292923;
  --color-muted: #77746C;
  --color-white: #FFFFFF;

  /* Typography */
  --font-heading: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;

  /* Layout */
  --container-max: 1440px;
  --reading-max: 720px;
  --gutter: clamp(1.25rem, 5.5vw, 5.5rem);
  --section-space: clamp(4rem, 8vw, 8rem);

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 5.5rem;
  --space-10: 7rem;

  /* Borders */
  --border-subtle: 1px solid rgba(41, 41, 35, 0.08);
  --border-gold: 1px solid rgba(184, 154, 106, 0.45);

  /* Radius */
  --radius-card: 1.25rem;
  --radius-image: 1.5rem;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-card: 0 12px 32px rgba(31, 38, 30, 0.06);
  --shadow-floating: 0 18px 50px rgba(20, 30, 23, 0.12);

  /* Motion */
  --ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 200ms;
  --duration-reveal: 600ms;
}
```

## 21. CSS base recomendado

``` css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
}

body {
  margin: 0;
  background: var(--color-cream);
  color: var(--color-charcoal);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

img {
  height: auto;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
}

h1,
h2,
h3,
blockquote {
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 1.08;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

.container {
  width: min(100% - 2 * var(--gutter), var(--container-max));
  margin-inline: auto;
}

.section {
  padding-block: var(--section-space);
}

.eyebrow {
  margin-bottom: 1rem;
  color: var(--color-earth);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  background: var(--color-forest);
  color: var(--color-ivory);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background-color var(--duration-fast) ease,
    color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.button:hover {
  background: var(--color-moss);
}

.button:active {
  transform: scale(0.98);
}

.button:focus-visible,
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-earth);
  outline-offset: 4px;
}

.card {
  overflow: hidden;
  border: var(--border-subtle);
  border-radius: var(--radius-card);
  background: var(--color-ivory);
  box-shadow: var(--shadow-card);
}

.image-organic {
  overflow: hidden;
  border-radius: 38% 62% 55% 45% / 42% 38% 62% 58%;
}

.image-organic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section--dark {
  background: var(--color-forest);
  color: var(--color-ivory);
}

.section--dark .eyebrow {
  color: var(--color-gold);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 22. Orden sugerido de implementación

1.  Configura las fuentes y las variables CSS.
2.  Construye el contenedor global, la navegación y los botones.
3.  Implementa el hero y valida su composición en escritorio y móvil.
4.  Crea los estilos reutilizables para secciones claras y oscuras.
5.  Implementa pilares, herramientas, historia y tarjetas de servicios.
6.  Añade recortes orgánicos e ilustraciones botánicas.
7.  Integra las animaciones después de que el layout esté sólido.
8.  Revisa contraste, navegación por teclado, carga de imágenes y
    responsive.
9.  Sustituye imágenes provisionales por fotografías autorizadas y
    conecta todos los CTA a destinos reales.

## 23. Checklist visual antes de entregar

-   [ ] El hero tiene un titular editorial dominante y una fotografía
    protagonista.
-   [ ] Los fondos crema y verde bosque crean ritmo visual.
-   [ ] Las tipografías serif y sans serif tienen funciones
    diferenciadas.
-   [ ] Los recortes orgánicos se sienten intencionales, no aleatorios.
-   [ ] Los bordes son sutiles y las sombras discretas.
-   [ ] Los botones principales son consistentes en toda la página.
-   [ ] Los párrafos tienen longitud y contraste adecuados.
-   [ ] En móvil no hay desbordamiento horizontal ni textos demasiado
    pequeños.
-   [ ] Las animaciones respetan `prefers-reduced-motion`.
-   [ ] Las fotografías y enlaces finales corresponden a Jen y a sus
    servicios reales.

------------------------------------------------------------------------

**Criterio de éxito:** una landing page cálida y memorable que transmita
la esencia de Jen mediante composición, fotografía, tipografía y ritmo
visual, manteniendo una navegación clara y una experiencia accesible.
