import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    //---Se extraen las propiedades del objeto formState los cuales recibe directamente del useState
    //---const { userName, email, password} = formState

    //---se crea evento para renderizar los cambos en el input, se desestructura el parametro event y de extrae target
    const onInputChange = ({target}) => {
        //---se extraen name y value de target
        const {name, value} = target

        //---obtenidas las propiedades se pueden llamar para para cambiarls a travez del setFormState
        setFormState({
            //---funcion para tomar los valores existentes y asi conservarlos en la nueva renderizacion
            ...formState,
            //---propiedades computadas de los objetos (se modifica el value del name selecionado)
            [name]:value,
        })
    }

    const onResetForm = () => {

        setFormState(initialForm)

    }
        //---En return se envian las funciones que se exportaran directamente
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm

  }
}
