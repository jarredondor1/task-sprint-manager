# Task & Sprint Manager

Herramienta ligera para la gestión ágil de tareas y sprints, orientada a equipos que trabajan bajo metodologías como Scrum.

Este proyecto se desarrolla por sprints, permitiendo visualizar la evolución incremental del producto.

---

## Objetivo del Producto

Construir una aplicación web que permita:

- Gestión de usuarios autenticados
- Creación y administración de sprints
- Gestión de tareas asociadas a cada sprint
- Seguimiento básico del estado de trabajo

---

## Estructura del Proyecto

- `client` → Frontend desarrollado con React + Vite + TypeScript
- `server` → Backend desarrollado con Node.js + Express

Arquitectura general:

- Cliente consume API REST del servidor
- Autenticación basada en token
- Persistencia de datos en el backend

---

## Sprint 1 – Fundamentos del Sistema

En este primer sprint se establecieron las bases técnicas y funcionales del sistema.

### ✅ Funcionalidades implementadas

1. Registro de usuario
2. Inicio de sesión (Login)
3. Generación y retorno de token de autenticación
4. Persistencia básica del estado autenticado en frontend
5. Conexión entre frontend y backend mediante API

### ✅ Entregables técnicos

- Estructura inicial del proyecto (client/server)
- Configuración de entorno de desarrollo
- Endpoints de autenticación
- Servicio de consumo de API en el frontend
- Flujo completo de autenticación funcional

---

## Rol del Product Owner en Sprint 1

Durante este sprint el Product Owner definió:

- Alcance inicial del producto (MVP técnico)
- Historias de usuario relacionadas con autenticación
- Criterios de aceptación para login y registro
- Priorización de funcionalidades base

Este README permite llevar trazabilidad del avance por sprint y visibilizar el valor entregado en cada iteración.

---

## Cómo ejecutar el proyecto

### 1️⃣ Backend

```bash
cd server
npm install
npm run dev
```

### 2️⃣ Frontend

```bash
cd client
npm install
npm run dev
```

Abrir en navegador:

```
http://localhost:5173
```

---

## Próximos pasos (Sprint 2 - Propuesto)

- Creación de Sprints
- Creación de Tareas
- Asociación de tareas a sprints
- Visualización tipo tablero
- Mejora de experiencia de usuario

---

## Estado del Proyecto

Sprint actual: ✅ Sprint 1 completado

El proyecto continúa evolucionando de forma incremental.
