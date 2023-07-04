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

 
 
 
  