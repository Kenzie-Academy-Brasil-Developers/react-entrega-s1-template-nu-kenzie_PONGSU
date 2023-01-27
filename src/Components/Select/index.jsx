export const Select = ( {onChange} ) => {
  
return (
  <select className='formSelect' required defaultValue='Entrada' name='select' id='valueType'  
  onChange={onChange}>
    <option disabled value=''>Selecione o tipo</option>
    <option value='Entrada'>Entrada</option>
    <option value='Saída'>Saída</option>                            
  </select>
)}