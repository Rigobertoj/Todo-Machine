import React, {useState} from "react";
/**
 * @description function que nos permite utilizar un custom hook para poder agregar o eliminar elementos de nuestro localStorage
 * @param {String} itemName clave por la cual se accedera a los elementos del localStorage
 * @param {*} initialValue  estrutura o tipo de dato que se utilizara en nuesto localStorage
 * @returns un array de 2 elementos el cual es el valor de estadoo una function para cambiar ese valor
 */
 const useLocalStorage = (itemName, initialValue) => {
    //obtenemos un localStorage con la API de localStorage.getItem(pasamos como argumento el item que habiamos guardado como si fuera un key/clave) esta API solo puede recibir texto como argumento poreso utilizamos JSON.stringify y JSON.parse
    const localStorageItem = localStorage.getItem(itemName)
    // parsedItem sera el tipo de dato que usaremos o la estrucutura (una lista, objeto, un numero etc)
    let parsedItem;
  
    //comprobamos si el localStorage esta basio 
    if(!localStorageItem){
      //si lo esta, utilizamos el metodo de setItem para crearlo utilizando el nombre que pasamos como argumento, y JSON.stringify() para convertir el tipo de dato o elemento en un texto 
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      //parsedItem sera igual al tipo de dato o estrucutra que queramos
      parsedItem = initialValue
    }else{
      //si no esta, en parsedItem convertimos a localStorageItem en un elemento de JS ya sea un objeto o tipo de dato
      parsedItem = JSON.parse(localStorageItem)
    }
    
    //creamos un estado que nos permita canviar el valor de parsedItem 
    const [item, setTodos] = useState(parsedItem)
  
    /**
     * @description function que nos permite remplazar el valor un elemento o nuesto localStorage 
     * @param {*} newItem 
     */
    const saveItem = (newItem) => {
      //creamos un elemento que sera el valor del argumento stringifyado 
      const stringifiedItem = JSON.stringify(newItem);
      // cambiamos el valor del localStorage con setItem() 1param => clave de el localStorage 2param => nuevo valor
      localStorage.setItem(itemName, stringifiedItem);
      // cambiamos el estado con el nuevo valor de NewItem
      setTodos(newItem)
    }
  
    //retornamos el item y el metodo para seterar su valor
    return [item, saveItem]
  }
export {useLocalStorage}