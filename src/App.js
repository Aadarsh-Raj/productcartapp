import logo from './logo.svg';
import './App.css';
import Main from './Component/Main';
import CartContext from './Context/CartContext';

function App() {
  return (
    <>
    <CartContext >
    <Main />

    </CartContext>
    </>
  );
}

export default App;
