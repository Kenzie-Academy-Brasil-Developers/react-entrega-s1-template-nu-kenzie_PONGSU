export const Input = ( {onChange, className, type, id, placeholder, value} ) => {

return (
  <input className={className} required type={type} id={id} value={value} placeholder={placeholder} onChange={onChange}/>
)}