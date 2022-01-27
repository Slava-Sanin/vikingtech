import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'
import './DialogFormik.css'

const initialValues = { field_name: '', type: '', offset: {from: 0, to: 0}, description: '' }

const onSubmit = values => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        //setSubmitting(false);
    }, 400);
}

const validationSchema = Yup.object({
    field_name: Yup.string().required('Required!'),
    type: Yup.string().required('Required!')
})

const validateOffset = value => {
    let error;
    if (value.offset.from >= value.offset.to) { error = 'Invalid offset data' }
    return error
}

const validate = values => {
    let errors = {};
    if (!values.field_name) { errors.field_name = 'Required' } 
    if (!values.type) { errors.type = 'Required' } 
    //if (values.offset.from >= values.offset.to) { errors.offset = 'Invalid offset data'; }
    return errors
}

    function DialogFormik() {    
    //const formik = useFormik({ initialValues, onSubmit, validate })
    //console.log(values)

    return (
      <div id="dialog_full_screen" className="dialog_full_screen">
          <div className="wrapper">
            <h1>Field Declaration<span className="close" onClick={() => this.dialogInstance.hide()}>X</span></h1><br/>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            
                <Form>
                <div className="form-control">
                    <label htmlFor="field_name">*Field name</label><br/><br/>
                    <Field type="text" id="field_name" name="field_name" />                
                    <ErrorMessage name='field_name'>    
                        {errorsMsg => <div className="error">{errorsMsg}</div>}
                    </ErrorMessage>
                        
                </div>
                
                <div className="form-control">
                    <label htmlFor="type">*Type</label><br/><br/>
                    <Field list="types" id="type" name="type" />
                    <datalist id="types">
                        <option value="Number"/>
                        <option value="String"/>                
                    </datalist>                    
                    <ErrorMessage name='type'>    
                        {errorsMsg => <div className="error">{errorsMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="offset">*Offset</label><br/><br/>
                    <label htmlFor="offset.from">From </label>
                    <Field type="number" name="offset.from" 
                        //validate={validateOffset}
                    />

                    <label htmlFor="offset.to">  To </label>
                    <Field type="number" name="offset.to"
                        //validate={validateOffset}
                    />

                    <ErrorMessage name='offset.from'>    
                        {errorsMsg => <div className="error">{errorsMsg}</div>}
                    </ErrorMessage>
                </div>
                
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <Field 
                        as="textarea"
                        id="description"
                        name="description"
                        placeholder="Add Description"                        
                    />
                </div>

                <Button type="submit" id="Save" variant="contained" disabled={null}>Save</Button>
                <Button type="submit" id="Cancel" variant="contained" disabled={null}>Cancel</Button>
                <br/><br/>
                </Form> 
         
            </Formik>
        </div>   
      </div>
    );
  }
  
  export default DialogFormik;