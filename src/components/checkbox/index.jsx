import React, { useContext } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { FaCheck } from 'react-icons/fa';
import { useFormContext } from 'react-hook-form';

import ValidationSchemaContext from '../form/validationSchemaContext';
import './style.scss';

export default ({ label, name, ...props }) => {
  const { register, errors } = useFormContext();
  const validationSchema = useContext(ValidationSchemaContext);
  
  return (
    <div className={classNames('c-form__input', {
        'c-form__input--invalid': !!errors[name]
      })}>
      <label className="c-checkbox">
        <input 
          type="checkbox"
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

        <span className="c-checkbox__box">
          <FaCheck className="c-checkbox__icon" />
        </span>

        <span className="c-checkbox__label">{label}</span>
      </label>
        
      {errors[name] ? (
        <div className="c-input__error">
          <FormattedMessage id={errors[name].message} />
        </div>
      ) : ''}
    </div>
  );
};