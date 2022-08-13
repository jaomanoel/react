import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FristComponent from  './components/FristComponents'
import Image from './components/Image';
import Hooks from './components/Hooks'; 
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h1>Hellow word</h1>
      <FristComponent></FristComponent>
      <AnotherComponent></AnotherComponent>
      <Image></Image>
      <Hooks></Hooks>
      <List></List>
      <RenderCond x={7} y={2}></RenderCond>
      <Fragment></Fragment>
      <Container>
        <h1>Este e Filho</h1>
      </Container>
    </div>
  );
}

export default App;
