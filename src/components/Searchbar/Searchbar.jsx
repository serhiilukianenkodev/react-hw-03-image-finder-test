import { FcSearch } from 'react-icons/fc';
import { Formik } from 'formik';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  BtnLabel,
  FormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.query.trim() === '') {
      return alert('Please enter valid query:))');
    }
    onSubmit(values.query.trim());
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormBtn type="submit">
            <FcSearch size="32px" />
            <BtnLabel>Search</BtnLabel>
          </SearchFormBtn>

          <FormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};
