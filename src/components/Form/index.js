import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Player } from '../../components'
import './style.styl'

class Form extends Component {
  render() {
    const {
      schema,
      inVisible,
      player,
      type,
      OnClose,
      handleFormItemChange,
    } = this.props
    const FormStyles = classNames({
      'form-container': true,
      'form-container-active': inVisible,
    })
    return (
      <div className={FormStyles}>
        <Player type={type} OnClick={() => OnClose()} />
        <div className="context">
          <ul>
            {Object.keys(schema).map((key, index) => {
              const item = schema[key]
              return (
                <li key={index}>
                  <label htmlFor="">
                    {item.label}
                  </label>
                  {item.type === 'string' &&
                    <input
                      type="text"
                      name={key}
                      value={player[key]}
                      onChange={e => handleFormItemChange(e, key)}
                    />}
                  {item.type === 'select' &&
                    <select
                      name={key}
                      value={player[key]}
                      onChange={e => handleFormItemChange(e, key)}
                    >
                      <option value="0" disabled>
                        请选择
                      </option>
                      {item.enum.map((option, index) => {
                        return (
                          <option value={option} key={index}>
                            {option}
                          </option>
                        )
                      })}
                    </select>}
                </li>
              )
            })}
          </ul>
          <div className="button-blue" onTouchTap={() => OnClose()}>
            <img
              src={require('../../assets/images/btn-txt-confirm-mini.png')}
              alt="确认"
            />
          </div>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  inVisible: PropTypes.bool,
  player: PropTypes.object,
  type: PropTypes.string,
  OnClose: PropTypes.func,
  handleFormItemChange: PropTypes.func,
  schema: PropTypes.object.isRequired,
}

export default Form
