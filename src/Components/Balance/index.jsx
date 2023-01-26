import "./styles.css";

export const Balance = ( {balance} ) => {

return (
  <div id="balanceSection">
    <div id="balanceTotalBox">
      <h3>Valor Total:</h3>
      <h3 id="balanceValue">R$ {balance.toFixed(2)}</h3>
    </div>
    <h5>O valor se refere ao saldo</h5>
  </div>
)}