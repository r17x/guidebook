import React from 'react'
import { Div, Input, Label } from "atomize";

export default function TextBox(
{
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}){
    const{ touched, errors }   = form 
    return (
        <Div 
            m={{ xs: ".5rem", md: "1rem" }}
            tag="section" >
        <Input 
            data-testid={field.name} 
            error={touched[field.name] && errors[field.name]} 
            {...field}  
            {...props}
        />
        <Label 
            data-testid={`label-${field.name}`}
            style={{visibility: touched[field.name] && errors[field.name] ? 'visible' : 'hidden'}}
            p={{t: 2}}
            textColor="warning700"
            hoverTextColor="warning800">
            {errors[field.name]}
        </Label>
    </Div>
    )
}
