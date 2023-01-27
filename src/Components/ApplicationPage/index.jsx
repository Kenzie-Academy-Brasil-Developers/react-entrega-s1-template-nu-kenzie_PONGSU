import logoBlack from  '../../assets/logoBlack.svg'
import NoCard from  '../../assets/NoCard.svg'
import { Balance } from '../Balance'
import { Form } from '../Form'
import { Header } from '../Header'
import { TransactionsList } from '../TransactionsList'
import './styles.css';

export const ApplicationPage =  ( {setHomePage, listTransactions, setListTransactions} ) => {
    const balance = listTransactions.reduce((valorAnterior, valorAtual) => {
      return valorAtual.amount + valorAnterior;
  }, 0)

    return (
      <div id='appContainer'>
        <Header setHomePage={setHomePage}/>
        <section id='appPageMain'>
          <div id='formBalance'>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            {listTransactions.length > 0 && (
              <Balance balance={balance}/>
            )}
          </div>
          <aside id='financialResum'>            
            <h4 id='financialResumTitle'>Resumo Finaceiro</h4>
          {listTransactions.length > 0 ? (
            <div>
              <TransactionsList setListTransactions={setListTransactions} listTransactions={listTransactions}/>
            </div>
            ):
            <div id='noTransactions'>
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img className='fakeCard' src={NoCard} alt='Um Card simbólico sem informações' />
              <img className='fakeCard' src={NoCard} alt='Um Card simbólico sem informações' />
              <img className='fakeCard' src={NoCard} alt='Um Card simbólico sem informações' />
            </div>
            }
          </aside>
        </section>

      </div>
    ) 
  }
