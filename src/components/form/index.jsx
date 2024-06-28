import React from 'react';
import { setLocale } from 'yup';
import { IntlProvider } from 'react-intl';
import dot from 'dot-object';
import { FormContext } from 'react-hook-form';

import {ValidationSchemaProvider} from './validationSchemaContext';
import translations from './translations/nl_NL.yaml';
import './index.scss';

setLocale({
  mixed: {
    required: 'mixed.required'
  },
  string: {
    email: 'string.email'
  }
});

export default ({className, methods, validationSchema, onSubmit, children}) => (
  <ValidationSchemaProvider value={validationSchema}>
    <FormContext {...methods} >
      <IntlProvider locale="nl-nl" messages={dot.dot(translations)}>
        <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </IntlProvider>
    </FormContext>
  </ValidationSchemaProvider>
);