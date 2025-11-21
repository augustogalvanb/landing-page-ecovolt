# EcoVolt Energy - Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Descripción del Proyecto

Landing page promocional desarrollada para **EcoVolt Energy**, una empresa ficticia de energía solar residencial. El proyecto forma parte de mi portfolio profesional y demuestra habilidades en desarrollo web frontend con enfoque en diseño responsivo, animaciones y experiencia de usuario.

La página tiene como objetivo convertir visitantes en leads potenciales mediante un diseño atractivo, información clara sobre los beneficios de la energía solar, y múltiples llamados a la acción estratégicamente ubicados.

## Características Principales

### Diseño y UX
- **Hero Section** impactante con imagen de fondo y CTA principal
- **Diseño Responsive** optimizado para dispositivos móviles, tablets y desktop
- **Animaciones on-scroll** utilizando Intersection Observer API
- **Smooth scroll** para navegación fluida entre secciones
- **Variables CSS** para fácil personalización de colores y tipografía

### Funcionalidades Interactivas
- **Formulario de contacto** con integración a Google Sheets para captura de leads
- **Botón flotante de WhatsApp** con animación pulse para contacto directo
- **Botón "Volver arriba"** que aparece dinámicamente al hacer scroll
- **Validación de formularios** en tiempo real
- **Estados de feedback** visual (éxito/error) en envío de formularios

### Secciones de Contenido
- Introducción al producto (energía solar residencial)
- Proceso en 3 pasos para el cliente
- 4 beneficios clave con iconos
- Testimonios de clientes con imágenes
- Sección CTA final con formulario
- Footer con enlaces a redes sociales

## Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica y accesibilidad |
| **CSS3** | Estilos, animaciones y diseño responsive |
| **JavaScript (Vanilla)** | Interactividad y lógica del cliente |
| **Google Fonts** | Tipografía Poppins |
| **Font Awesome 6** | Iconografía |
| **Intersection Observer API** | Animaciones on-scroll performantes |
| **Fetch API** | Integración con Google Apps Script |

## Estructura del Proyecto

```
landing-page-ecovolt/
│
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos generales y responsive
├── js/
│   └── main.js            # Lógica de interactividad
├── assets/
│   └── images/            # Imágenes del sitio
│       ├── hero-bg.jpg
│       ├── panel-solar-tejado.jpg
│       └── user[1-3].jpg
└── README.md              # Este archivo
```

## Instalación y Uso

### Clonar el repositorio
```bash
git clone https://github.com/tuusuario/landing-page-ecovolt.git
cd landing-page-ecovolt
```

### Visualizar el proyecto

Puedes abrir el proyecto de varias formas:

**Opción 1:** Abrir directamente en el navegador
```bash
# Simplemente abre el archivo index.html con tu navegador
```

**Opción 2:** Usar un servidor local (recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve

# Luego visita: http://localhost:8000
```

### Configuración del Formulario (Opcional)

Para habilitar la funcionalidad de envío a Google Sheets:

1. Crea un Google Apps Script con la función de captura de datos
2. Despliega el script como web app
3. Reemplaza la URL en `js/main.js` línea 4:
```javascript
const SCRIPT_URL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT';
```

## Funcionalidades Destacadas

### 1. Sistema de Animaciones
Utiliza Intersection Observer para detectar cuando los elementos entran en el viewport y aplicar animaciones CSS de forma eficiente:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);
```

### 2. Diseño Mobile-First Responsive
Media queries optimizadas para diferentes breakpoints:
- **Desktop:** > 992px (3 columnas en grids)
- **Tablet:** 768px - 992px (2 columnas en grids)
- **Mobile:** < 768px (1 columna, stack vertical)

### 3. Gestión de Estado del Formulario
Manejo completo del ciclo de vida del formulario:
- Validación HTML5
- Deshabilitación de botón durante envío
- Feedback visual de éxito/error
- Auto-reset tras envío exitoso
- Timeout automático de mensajes

## Mejoras Futuras

- [ ] Implementar modo oscuro
- [ ] Añadir galería de proyectos instalados
- [ ] Integrar calculadora de ahorro energético
- [ ] Agregar animaciones más complejas con GSAP
- [ ] Implementar lazy loading para imágenes
- [ ] Añadir tests unitarios con Jest
- [ ] Optimizar performance con Lighthouse

## Contacto

Si tienes preguntas o sugerencias sobre este proyecto, no dudes en contactarme:

- **GitHub:** [Tu usuario](https://github.com/tuusuario)
- **LinkedIn:** [Tu perfil](https://linkedin.com/in/tuusuario)
- **Email:** tu.email@ejemplo.com

---

**Nota:** Este es un proyecto de portfolio. EcoVolt Energy es una empresa ficticia creada con fines demostrativos.

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub
