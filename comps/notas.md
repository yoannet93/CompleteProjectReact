# Tools

1. Proptypes  
   `npm install prop-types`
   

2. Tailwind  
   https://tailwindcss.com/docs/guides/create-react-app
    Esta es la guia que se utilizó en el proyecto pear incorporar Tailwind pero estaen desuso.

    Existen otras en funcion del empaquetador web (Vite, Next.js, etc) que utilice para inicializar mi proyecto
https://tailwindcss.com/docs/installation/framework-guides

3. classNames para gestionar las clases de estilos y hacer varias combinaciones.  
   
    Documentacion: 
    https://www.npmjs.com/package/classnames
      
      `npm install classnames`

      `import className from "classnames"` en el componente donde lo voy a utilizar 
      
      Ver Button.js, ejemplo pr'actico de uso.

4. Iconos en react

   https://react-icons.github.io/react-icons/

   `npm install react-icons`

   importar al inicio del componente el icono que voy a estar utilizando, tal y como lo indica la docuentación 

5. UseRef: Hook permite a un componente obtener la referencia que necesita del DOM

   `import { useRef } from "react"`

   ```javascript
   function MyComponent(){
      ...
      const divEl = useRef()
      ...

   return(
      <div ref={divEl}></div>
   )
   }
   ```

6. Técnicas condicionales 
   
   ` value?.label || "select..."`

   esta instruccion devuelve el primer valor verdadero.
   En este caso: 
    El string `"select..."` siempre es verdadeo.  
   `value?.label` devuelve undefined si almacena un valor null, en este caso el primer verdadeo seria `"select...`, de lo contrario se muestra el valor seleccionado. 
   -Ver lógica completa en el componente Dopdown.

   7.Panel control 
   Este panel control no es más que un contenedor reutilizable para no repetir estilos
   se implementa como sigue:

   ```javascript
   import classNames from 'classnames'
      function Panel({ children, className, ...rest}){
          const finalClassNames = classNames(
              'border rounded p-3 shadow bg-white w-full', className
          );
          return(
              <div {...rest} className={finalClassNames}>
                  {children}
              </div>
          );
      }
      export default Panel
   ``` 
   De no utilizar este componente, se repetirían las clases para los estilos y sería mas dificil de leer en el codigo.

   Este componente basicamente devuelve un `div` que envuelve la prop children a las que se le pasan como prop:
   
   - `ClassName={finalClassNames}`: clases de estilos comunes, mas las que se puedan agregar diferenciadas.
   -` {...rest}`: con esta instruccion incluyo el resto de las propiedades que quiera pasarle de forma individualizada.

 
 
 7. Navigation en React   

   puntos positivos:
   - No se pierden las configuraciones de JS cdo cambio de vista.
   - Se trata de mofificar la url y hacer peticiones que muestren en pantalla lo que quiere ver el usuario quitando quellos elementos que estaan y no necesito y poniendo otros.

  Path viene siendo lo que está detras la raiz de mi app ejemplo:
  `myapp.com/dropdown    path:/dropdown`  

  `react-app.org/accordion  path:/accordion`   

  `localhost:3000/img/preview   path:/img/preview`
  
   
- windows.location.pathname   
  Devuelve el path de mi url

- PopState para rastrear nagigation inside de app

  `window.addEventListener("popstate", handler);`  
  Este evento controla cada vez que se cambia de un path a otro.
  Esto es util a la hora de que el usuario quiera darle hacia atras a la pagina o hacia adelante as'i puedo saber cdo lo hace y con otro código evitar el comportamiento por default de refrescar la pantalla y mostrar lo que quiera.
  
  `window.history.pushState({}, '', to); `  
  Actualiza la direccion de la url evitando que se refresque la pagina.

  La idea es cambiar los elementos que muestra mi pantalla en lugar de cambiar ficheros diferentes para mostrarle al usuario una vista diferente, pero si hago esto tengo que hacerle ver al usuario que ha cambiado de página por lo que debo actualizar el path. Esta accion debo hacerla sin que se refresque la pagina de lo contrario no funcionará por eso utilizo esta línea de codigo.

  8.Modal Page 