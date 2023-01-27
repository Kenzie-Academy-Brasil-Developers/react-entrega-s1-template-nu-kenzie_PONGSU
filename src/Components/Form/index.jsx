import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import './styles.css';

export const Form = ( {setListTransactions, listTransactions} ) => {
    const [desc, setDesc] = useState('')
    const [value, setValue] = useState(0)
    const [valueType, setValueType] = useState('Entrada')
    
    function handleSubmit(e) {
        e.preventDefault();
        let valueFormat = 0

        valueType == 'Saída'?valueFormat= -1: valueFormat = 1        
    
        const newValue = {
          id: uuid(),
          description: desc,
          amount: Number(value*valueFormat),          
          valueType: valueType,          
        };
    
        setListTransactions((listTransactions) => [...listTransactions, newValue]);

        setDesc('')
        setValue(0)

        console.log(listTransactions);
      }


return (
        <form onSubmit={handleSubmit}>
              <label className='formLabel' htmlFor='valueDesc'>Descrição</label>
              <Input className='formInput' type='text' id='valueDesc' value={desc} placeholder='Digite aqui sua descrição'
              onChange={(e) => setDesc(e.target.value)}/>

              <label className='formLabel' htmlFor='value'>Valor</label>
              <Input className='formInput' type='number' id='value' value={value} 
              onChange={(e) => setValue(e.target.value)}/>

              <label className='formLabel' htmlFor='valueType'>Tipo de valor</label>
              <Select onChange={e => {setValueType(e.target.value)}}/>
              
              <Button className='formButton' type='submit' innerText='Inserir Valor'/>
        </form>
)}