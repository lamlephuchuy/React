import * as React from "react"

const MyButton = ({ disabled, text }) => (
  <button disabled={disabled}>{text}</button>
)

MyButton.defaultProps = {
  text: "My Butoon",
  disabled: false,
}
export default MyButton;
