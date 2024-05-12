import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  // Zod Para interactura con el estado global de la aplicacion
  // npm i zod
// Zustand para el estado global de la aplicacion
  // npm i zustand
  // pagina donde consulte API 
  // https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsFullPriceEndpoint
  
 const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(()=>{
    fetchCryptos()
  },[]);
  
  return (
    <>
    <div className="container">
      <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>
      <div className="content">
        <CryptoSearchForm />
        <CryptoPriceDisplay />
      </div>
    </div>
    </>
  )
}

export default App
