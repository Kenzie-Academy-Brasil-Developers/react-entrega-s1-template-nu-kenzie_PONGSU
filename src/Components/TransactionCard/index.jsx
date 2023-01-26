import trash from '../../assets/trash.svg'
import "./styles.css";

export const TransactionCard = ( {setListTransactions, listTransactions, valueId, valueDesc, valueType, amount} ) => {

function removeTransaction(id) {
    const newList = listTransactions.filter(item => (item.id !== id))
    setListTransactions([...newList])
}

return (
        <li className='inputValueCard' id={valueId}>
          <aside className={valueType}></aside>
          <div className='cardInfo'>
            <div className='cardFirstSection'>
              <h3 className="valueDesc">{valueDesc}</h3>
              <h5 className="valueType">{valueType}</h5>
            </div>
            <div className='cardSecondSection'>
              <h4>R$ {amount.toFixed(2)}</h4>
              <img className='removeButton' onClick={() => removeTransaction(valueId)} src={trash} alt="Botão de excluir" />
            </div>
          </div>
        </li>
)}