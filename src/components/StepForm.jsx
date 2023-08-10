'use client';

import { Box } from '@chakra-ui/react';
import {
  StepForm,
  FormLayout,
  NextButton,
  PrevButton,
  SubmitButton,
} from '@saas-ui/react';

export default function StepFormComponent() {
  const onSubmit = (params) => {
    console.log(params);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  };

  return (
    <StepForm
      defaultValues={{
        name: '',
        email: '',
        address: '',
        contactNumber: '',
      }}
      onSubmit={onSubmit}
    >
      {({ Field, FormStep, isCompleted }) => (
        <FormLayout>
          <FormStep name='profile'>
            <FormLayout>
              <Field name='name' label='Name' rules={{ required: true }} />
              <Field name='email' label='Email' rules={{ required: true }} />
              <NextButton />
            </FormLayout>
          </FormStep>
          <FormStep name='details'>
            <FormLayout>
              <Field
                name='contactNumber'
                label='Contact Number'
                type='number'
                rules={{ required: true }}
              />
              <Field
                name='address'
                label='Address'
                type='textarea'
                rules={{ required: true }}
              />
              <Box display='flex' justifyContent='space-between'>
                <PrevButton />
                <SubmitButton text='Submit' type='submit' />
              </Box>
            </FormLayout>
          </FormStep>
          {isCompleted && (
            <Box>
              <Box>User added successfully.</Box>
            </Box>
          )}
        </FormLayout>
      )}
    </StepForm>
  );
}
