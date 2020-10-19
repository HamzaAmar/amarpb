import React, { useState } from "react"
import PropTypes from "prop-types"

import { ErrorContainer, Container, FormItem, InsideButton } from "./style"

const Text = ({
  name,
  title,
  type,
  isRequired,
  buttonInside,
  buttonText,
  placeholder,
}) => {
  const { message, setMessage } = useState(null)

  return (
    <Container>
      <FormItem>
        <label htmlFor={name}>
          {!buttonInside ? (
            <input
              type={type}
              name={name}
              id={name}
              required={isRequired}
              placeholder={title}
            />
          ) : (
            <InsideButton>
              <input
                type={type}
                name={name}
                id={name}
                required={isRequired}
                placeholder={placeholder}
              />
              <button>{buttonText}</button>
            </InsideButton>
          )}
        </label>
        {message ? (
          <ErrorContainer>
            <div>X</div>
            <small>Message error</small>
          </ErrorContainer>
        ) : null}
      </FormItem>
    </Container>
  )
}
Text.defaultProps = {
  isRequired: false,
  buttonInside: false,
  type: "text",
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  buttonInside: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
}

export default Text
