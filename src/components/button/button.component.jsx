import './button.styles.scss'

const BUTTON_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}
const Button = ({ children, buttonClass, ...otherProps }) => {
  return <button className={`button-container ${buttonClass ? BUTTON_CLASSES[buttonClass] : ''}`} { ...otherProps }>{children}</button>;
}

export default Button;