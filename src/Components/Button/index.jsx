import './styles.css';

export const Button = ( {onClick, className, type, innerText} ) => {

return (
  <button onClick={onClick} className={className} type={type}>{innerText}</button>
)}