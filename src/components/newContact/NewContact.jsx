import { Formik, Field, Form } from 'formik';

export const AddContact = ({ create }) => {
    return (
    <Formik
    initialValues={{
        name: '',
        number: '',
    }}
      
    onSubmit={ (values) => {
        create(values);
    }}
    >
    <Form>
        <label htmlFor="Name">Name</label>
        <Field id="Name" name="name" placeholder="Jacob Mercer" type="text" required/>
        <label htmlFor="Number">Number</label>
        <Field 
        id="Number" 
        name="number" 
        placeholder="227-91-26" 
        type="tel" 
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        <button type="submit">Add contact</button>
    </Form>
    </Formik>
    );
};