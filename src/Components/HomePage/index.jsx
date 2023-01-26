import HomeImg from '../../assets/HomeImg.svg'
import logoWhite from '../../assets/logoWhite.svg'
import { Button } from '../Button';
import "./styles.css";

export const HomePage = ( {setHomePage} ) => {
    return (
        <div id='homeContainer'>
            <section id='homeSection'>
                <div id='homeInfo'>
                    <img id='homeLogo' src={logoWhite} alt="logo Nu Kenzie" />
                    <h2 className='homeTitle'>Centralize o controle das suas finanças</h2>
                    <h6 className='homeSubTitle'>de forma rápida e segura</h6>
                    <Button onClick={() => {setHomePage(false)}} className='homePageButton' type='button' innerText='Iniciar'/>                    
                </div>
                <aside>
                    <img className='homeImg' src={HomeImg} alt="Imagem De Listas sobrepostas" />                        
                </aside>   
            </section>
        </div>
        )
  }
