## Scripts disponibles

En el directorio del proyecto, debemos realizar un :

### `npm install`

para instalar las dependencias del proyecto.

##luego desde el directorio del proyecto podemos utilizar los siguientes comandos:

### `npm start`

Para correr en modo desarrollo:
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### `npm test`

Este comando corre los test en modo interactivo pero no han sido implementados por falta de tiempo.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

### `npm run lint`

ejecutará eslint

### `npm run lint:fix`

el linting intentará arreglar los cambios de manera automática y dejará aquellos que requieran de mayor atención por parte del developer.

## Comentarios

Si bien las url aportadas para la realización de este challenge fueron las dos siguientes: 1)https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json 2)https://itunes.apple.com/lookup?id={podcastId}

la segunda no poseía toda la información necesaria referente a los Episodios.
por tal motivo, hallé en internet el sigiente foro del sitio web de apple:
https://developer.apple.com/forums/thread/654141

en el mismo se propone una url similar a la segunda proporcionada para el challenge, pero con la funcionalidad agregada de los episodios. por lo que procedí a utilizar dicha url. Asimismo y para evitar un tiempo de respuesta mayor, limite a 10 la cantidad de episodios, pero puede ser modificado si así se requiere.

https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=10
