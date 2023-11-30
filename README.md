# Mis pelis

## Descripción

Proyecto final para el curso de React de Codo a Codo 4.0.



### Funcionalidades

- Autenticación usando JWT construida en NodeJs. Este es el link del repositorio con el backend: https://github.com/MateoCao/mis-pelis-back. Este código también esta hosteado en https://app.cyclic.sh/.
- Podés ver peliculas en la página principal, obtenidas desde The Movie Database.
- Buscar películas por nombre (proximamente filtrar por género).
- Ver información de cada película con su trailer (si es que tiene uno).
- Agregar/eliminar peliculas a una lista de favoritos.


### Tecnologías

Vite, React, Tailwind CSS, NodeJs, MongoDB. 
### Estado

Se encuentra todavía en desarrollo.
### Demo


https://www.mispelis.com.ar/

## Instalación

- Cloná el repositorio.

```bash
  git clone https://github.com/MateoCao/mis-pelis
```

- Dirigite al directorio raíz del proyecto.

```bash
  cd mis-pelis
```

- Instalá las dependencias.

```bash
  npm install
```

- Iniciá la aplicación en un servidor de desarrollo.

```bash
  npm run dev
```

- Abrí el proyecto desde el navegador usando la url proporcionada en la consola.
- Asegurate de que el proyecto se levante en el puerto 5173 o 5174. De otra forma, no vas a poder hacer solicitudes hacia el backend por un error de CORS. 
- Si querés, podés también clonarte el repositorio del backend y seguir los mismos pasos dados aquí arriba.

```bash
  git clone https://github.com/MateoCao/mis-pelis-back
```
### Variables de entorno

Para que funcione la aplicación, tenés que agregar la siguiente variable de entorno en un archivo .env en el directorio raíz del proyecto.

`VITE_APP_TMBD_API_KEY` La podés obtener creandote un usuario en The Movie Database. 



## Enlaces útiles

https://github.com/MateoCao/mis-pelis-back

https://www.themoviedb.org/