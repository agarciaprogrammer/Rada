# Rada – Plataforma Inteligente de Lectura de PDFs

Rada es una aplicación web full stack que permite a los usuarios subir archivos PDF, visualizar su contenido por secciones y recibir asistencia inteligente de IA para entender o resumir textos complejos. La idea es ofrecer una alternativa gratuita y expansible a las herramientas limitadas y pagas que existen actualmente en el mercado.

Imaginá un Adobe Reader, pero potenciado con IA conversacional y resúmenes automáticos.

---

## Objetivos del Proyecto

- Facilitar la lectura y comprensión de documentos largos o técnicos (papers, libros, artículos, etc.).
- Ofrecer resúmenes automáticos y navegación estructurada del texto por secciones.
- Permitir conversaciones naturales con el contenido del PDF mediante modelos LLM.
- Diseñar una plataforma extensible, moderna y completamente open source.

---

## Características del MVP

Funcional, útil y simple para validar la idea:

- Subida de PDFs desde la web
- Extracción del texto del PDF
- Seccionamiento automático por títulos y subtítulos
- Resumen automático general usando LLM
- Chat con el documento para hacer preguntas sobre su contenido
- Visualización organizada del texto por secciones
- Interfaz web responsiva y moderna (React + Tailwind)

---

## Roadmap Técnico

### Fase 1 – MVP Funcional

- [ ] Subida de archivos PDF
- [ ] Extracción y limpieza del texto
- [ ] Detección básica de secciones (títulos, subtítulos)
- [ ] Resumen automático del documento completo
- [ ] Interfaz de chat basada en el contenido del PDF
- [ ] Visualización organizada del contenido
- [ ] Deploy inicial: frontend (Vercel), backend (local o VPS)

---

### Fase 2 – Mejoras incrementales

- [ ] Autenticación y cuentas de usuario (JWT)
- [ ] Guardado de PDFs y resúmenes por usuario
- [ ] Navegación mediante tabla de contenidos dinámica
- [ ] Uso de base vectorial real (Qdrant, Weaviate)
- [ ] RAG avanzado: respuestas precisas por secciones relevantes
- [ ] Soporte para PDFs escaneados (OCR con Tesseract.js)

---

### Fase 3 – Expansiones futuras

- [ ] Anotaciones personales y resaltado de texto
- [ ] Exportación de resúmenes y chats
- [ ] Colaboración entre usuarios
- [ ] Búsqueda semántica dentro del documento
- [ ] Soporte móvil / Progressive Web App
- [ ] Extensión de navegador para lectura directa de PDFs

---

## Tech Stack Propuesto

### Frontend
- React + TypeScript
- Tailwind CSS
- Vite

### Backend
- Node.js + Express
- LangChain
- Ollama (LLaMA 3 u otro modelo local)
- Vector DB: Qdrant (en fase 2)
- pdf-parse / pdfjs-dist para lectura

### Infraestructura
- Docker para desarrollo y despliegue
- Vercel (frontend)
- Railway o VPS (backend y modelo)

---

## Público objetivo

- Estudiantes y autodidactas
- Profesionales que leen papers o manuales
- Docentes que preparan clases desde PDFs
- Cualquier persona que desee leer mejor y más rápido

---

## Cronograma MVP (Estimado)

| Semana | Tareas principales |
|--------|--------------------|
| 1 | Setup inicial del stack, carga de archivos |
| 2 | Extracción de texto y seccionamiento básico |
| 3 | Integración del resumen con LLM |
| 4 | Chat con el documento |
| 5 | Mejoras visuales y pruebas |
| 6 | Deploy, documentación y refinamiento |

---

## Contribuciones futuras

Este proyecto está pensado para ser open-source y colaborativo. Si te interesa sumar mejoras, nuevas funcionalidades o simplemente aprender del código, estás invitado a participar.

---

## Licencia

MIT – Libre para uso personal y comercial con atribución.
