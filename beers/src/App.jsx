import beers from './components/beers/Beers';


function App() {

  
    const Beers = () => {
      const calcularPrecioARS = (precioUSD) => {
        return precioUSD * 100;
      };
    
      
        <div>
          <h2>Lista de cervezas</h2>
          <ul>
            {beers.map(beer => (
              <li key={beer.id}>
                <p>{beer.beerName}</p>
                <p>Estilo: {beer.beerStyle}</p>
                <p>Precio (ARS): {calcularPrecioARS(beer.price)}</p>
                <p>Disponible: {beer.available ? 'Sí' : 'No'}</p>
              </li>
            ))}
          </ul>
        </div>
      
      return Beers;
    }
}

export default App;
