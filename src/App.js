import { useEffect, useState } from "react";
import CoinGecko from 'coingecko-api'

function App() {
  const [coins, setCoins] = useState(null)

  useEffect( () =>{

    const CoinGeckoClient = new CoinGecko();
    async function pingAPI() {
      // return await CoinGeckoClient.ping();

      const response = await CoinGeckoClient.ping();
      console.log(response.data);
      return response

      
    }


    async function fetchallCoin() {
      // return await CoinGeckoClient.ping();

      const response = await CoinGeckoClient.coins.all();
      console.log(response.data);
      setCoins(response.data)
      return response

      
    }

    pingAPI()
    fetchallCoin()


  }, [])




  return (
    <div>samheart
      {coins && (
        <ul>

          {coins.map(coin => {
            return(
              <li key={coin.id}> 
                {coin.id}
                {coin.name}
                {/* <img src={coin.image} alt=""/> */}

              </li>
              
            )
          })}
          
          
          
           </ul>
      )}
    </div> 

  );
}

export default App;
