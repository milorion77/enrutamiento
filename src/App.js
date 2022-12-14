import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ComponenteParametros from './Componentes/ComponenteParametros/ComponenteParametros';
import Home from './Componentes/Home/Home';


// Siempre convertirlo a una funcion de flecha
const App = () => {

  return(
// Antes de crear un BrowserRouter tengo que haberlo instalado previamente en mi terminal :D !
    <BrowserRouter>
    <div className='container'>
      <Switch>
        <Route path="/home" render={() => <Home/>}  />
        <Route path="/:palabra" exact render ={(routeProps)=> <ComponenteParametros {...routeProps}/>} /> 
        <Route path="/:palabra/:color/:bg" exact render = {(routeProps)=> <ComponenteParametros {...routeProps}/>} />
      </Switch>
    </div>
    </BrowserRouter>

  )

}





export default App;
