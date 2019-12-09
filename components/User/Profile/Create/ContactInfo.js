import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import RegularExpressions from '../../../../utilities/validation';

import FormInput from '../../../shared/FormInput';
import {
  FormRow,
  FormRule,
  FormCancel,
  FormSubmit,
} from '../../../shared/FormLayout';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      mobilePhone: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      company: '',
      title: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Required'),
      emailAddress: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      mobilePhone: Yup.string().matches(
        RegularExpressions.phoneRegExp,
        'Phone number is not valid',
      ),
      showEmailAddressOnProfile: Yup.bool(),
      showMobilePhoneOnProfile: Yup.bool(),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
      company: Yup.string(),
      title: Yup.string(),
    }),
    onSubmit: values => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
      window.location = 'create/upload-image';
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormRow>
        <FormInput fieldName="fullName" formikForm={formik} label="Full Name" />
      </FormRow>
      <FormRow>
        <FormInput
          fieldName="emailAddress"
          formikForm={formik}
          label="Email Address"
        />
        <FormInput
          fieldName="showEmailAddressOnProfile"
          formikForm={formik}
          label="Show on my profile"
          inputType="checkbox"
        />
      </FormRow>
      <FormRow>
        <FormInput
          fieldName="mobilePhone"
          formikForm={formik}
          label="Mobile Phone"
        />
        <FormInput
          fieldName="showMobilePhoneOnProfile"
          formikForm={formik}
          label="Show on my profile"
          inputType="checkbox"
        />
      </FormRow>
      <FormRow>
        <FormInput fieldName="city" formikForm={formik} label="City" />
      </FormRow>
      <FormRow>
        <FormInput fieldName="state" formikForm={formik} label="State" />
      </FormRow>
      <FormRow>
        <FormInput fieldName="country" formikForm={formik} label="Country" />
      </FormRow>
      <FormRow>
        <FormInput fieldName="company" formikForm={formik} label="Company" />
      </FormRow>
      <FormRow>
        <FormInput fieldName="title" formikForm={formik} label="Title" />
      </FormRow>
      <FormRule />
      <FormCancel />
      <FormSubmit />
    </form>
  );
};

export default Form;
