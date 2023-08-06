import { useState } from "react";

export function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);

    function HandleChange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange : HandleChange
    }
}