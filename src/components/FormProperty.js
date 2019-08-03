import React  from 'react'
import { Formik, Field, Form, 
    //     ErrorMessage 
} from 'formik';
import {func} from 'prop-types'
import {object, string} from 'yup'
// import FormControl from '@material-ui/core/FormControl';
import TextBox from 'components/templates/TextBox'
import {Button} from 'atomize'

const initialValue = {
    name: '',
    address: '',
}

const validation =  object().shape({
    name: string().required('Property Name is Required'),
    address: string().required('Property Address is Required')
})

const _FormProperty = ({ errors, status, touched, handleSubmit }) => (
     <Form>
         <Field data-testid="name" name="name" placeholder="Property Name" label="Name" component={TextBox}/>
        <Field data-testid="address" name="address" label="Address" placeholder="Property Address" component={TextBox} />
         <Button type="submit" data-testid="submitProperty" m={{ xs: ".5rem", md: "1rem" }} onClick={handleSubmit}>
            Save
        </Button>
     </Form>
)

export default function FormProperty({onSubmit}){
    return (
        <Formik
            initialValue={initialValue}
            validationSchema={validation}
            render={_FormProperty}
            onSubmit={onSubmit}
        />
    )
}

FormProperty.propTypes = { 
    onSubmit: func.isRequired,
 }
