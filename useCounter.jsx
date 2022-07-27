import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    //dentro del custom hook se tienen que crear las funciones de del setCounter y 
    //agregarlas al RETURN para poder usarlas en donde se llame el customhook

    //value recive el valor del evento 
    const plus = (value = 1) => {
        setCounter(counter + value)
    }
    const reset = () => {
        setCounter( initialValue)
    }
    const less = (value = 1) => {
        if (counter < 2 ) return
        setCounter( (current) => current - value)
    }

    return{
        //la propiedad counter con valor counter al tener la misma palabra se puede solo poner una vez
        //counter: counter
        counter,
        plus,
        reset,
        less

    }
}