import logoBlack from  '../../assets/logoBlack.svg'
import { Button } from '../Button';
import './styles.css';

export const Header =  ( {setHomePage} ) => {

    return (
        <header>
          <img src={logoBlack} alt='Logo Nu Kenzie' />
          <Button onClick={() => {setHomePage(true)}} className='headerButton' type='button' innerText='Início'/>
        </header>
    ) 
  }
