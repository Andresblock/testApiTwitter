# Informacion:

Desarrollo del test:

    1- Se realiza la creacion de una app web NodeJs usando el motor de plantillas Handlebars.
    2- Se realiza la creacion de endpoints utilizando express como libreria para enrutamiento.
    3- Se realiza la conexion a Base de datos MySQL provista, para tomar como referencia la tabla "portfolio".
    4- Una vez se consulto un registro en la tabla, se exporto en formato JSON los resultados para tomar la estructura de campos.
    5- Dentro de las rutas de la aplicacion, se encuentra una ruta de creacion de registros, esta se utilizo para inicializar la base de datos MongoDB, actualmente se encuentra en el hosting alwaysdata.
    6- Por medio de POSTMAN se realizan las pruebas sobre las rutas:
        - /updtPortfolio/:id    -> ruta de actualizacion de registro de portafolio.
        - /portfolio/add        -> ruta de creacion de registro de portafolio.
        - /                     -> ruta principal, en ella se realiza una consulta del portafolio a la BD.
    
    Elementos completados de la prueba:

        1- creacion de app web con presentacion de portafolio.
        2- ruta de consulta de informacion para alimentar el portafolio en web.
        3- ruta de actualizacion de portafolio.
        4- creacion del esquema en base de datos no-SQL (mongoDB).
        5- generacion del repositorio para descarga del desarrollo.

# Pasos para ejecucion:

# 1- Clonar el repositorio con la url de gitHub

git clone https://github.com/Andresblock/zemoga

# 2- Una vez clonado, en la carpeta, ejecutar:

npm i

# 3- Para ejecutar y visualizar la apliacion:

npm start.