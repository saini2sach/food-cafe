import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './Checkbox.module.scss';

export default class Checkbox extends PureComponent {

  handleChange = (evt) => {
    this.props.handleChange({
      name: evt.target.name,
      value: evt.target.checked,
    })
  }

  render() {
    const { checked, disabled, name, checkmarkClass, rootClass, id, children } = this.props;
    return (
      <div className={s.checkboxContainer + ' ' + rootClass}>
        <label className={s.checkbox} id={id}>
          {children}
          <input
            type="checkbox"
            disabled={disabled}
            checked={checked}
            name={name}
            onChange={this.handleChange}
          />
          <span className={s.checkmark + ' ' + checkmarkClass} />
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  name: 'check_box',
  rootClass: ''
};
