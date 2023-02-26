import { Formik } from 'formik';
import { Field, Label } from './Filter.styled';

const Filter = ({ onSearch, value }) => (
  <Formik initialValues={{ name: '' }}>
    <Label>
      Find contact by name
      <Field type="text" name="name" value={value} onChange={onSearch} />
    </Label>
  </Formik>
);

export default Filter;
