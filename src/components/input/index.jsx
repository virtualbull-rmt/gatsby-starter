import React, { useContext } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import ValidationSchemaContext from '../form/validationSchemaContext';
import './style.scss';

export default ({ label, theme, name, ...props }) => {
  const { register, errors } = useFormContext();
  const validationSchema = useContext(ValidationSchemaContext);

  return (
    <div className={classNames('c-form__input', {
        'c-form__input--invalid': !!errors[name]
      })}>
      <div className={classNames('c-form__label', {
        'c-form__label--light': theme === 'light'
      })}>{label}</div>
      <input
        className={classNames('c-input', {
          'c-input--light': theme === 'light'
        })}
        name={name}
        ref={register({
          validate: (val) => {
            return validationSchema.validateAt(name, {
              [name]: val
            })
            .then(() => true)
            .catch((e) => e.message)
          }
        })} />

        {errors[name] ? (
          <div className="c-input__error">
            <FormattedMessage id={errors[name].message} />
          </div>
        ) : ''}
    </div>
  );
};