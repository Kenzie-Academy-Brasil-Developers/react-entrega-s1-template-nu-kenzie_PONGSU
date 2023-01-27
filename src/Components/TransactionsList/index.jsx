import { TransactionCard } from '../TransactionCard'
import './styles.css';

export const TransactionsList = ( {setListTransactions, listTransactions} ) => {

return (
        <ul id='transactionList'>
          {listTransactions.map((transaction) => {
            return (
              <TransactionCard setListTransactions={setListTransactions} listTransactions={listTransactions} key={transaction.id} valueId={transaction.id} valueDesc={transaction.description} valueType={transaction.valueType} amount={transaction.amount}/>
          )})}
        </ul>
)}