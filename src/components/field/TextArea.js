import React, { useState } from "react"
import PropTypes from "prop-types"

import { ErrorContainer, Container, FormItem } from "./style"

const TextArea = ({ name, title, isRequired }) => {
  const { message, setMessage } = useState(null)
  return (
    <Container>
      <FormItem>
        <label htmlFor={name}>
          <textarea
            name={name}
            placeholder={title}
            required={isRequired}
          ></textarea>
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
TextArea.defaultProps = {
  isRequired: false,
  buttonInside: false,
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  buttonInside: PropTypes.bool,
}

export default TextArea
