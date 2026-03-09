import React, { useState } from "react";


export const useForm = <T>(Form: T) => {
  
    const [formState, setForm] = useState<T>(Form);

    const onInput = ({target} : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = target;

        setForm({
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInput,
        setForm
    };
}
