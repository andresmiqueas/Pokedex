import { useState } from "react";

export const useForm =(initialForm={})=>{
    const [formState, setformState] = useState(initialForm)
}