import './App.css';
import {FireHere} from './lib/index'

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <div className="space" style={{height:800}} />
        <FireHere id='test1' onHereFn={()=>console.log('run')} >fire-here</FireHere>
        <div className="space" style={{height:1000}} />

        <span>hi , my here</span>
        <FireHere id='test2' onHereFn={()=>alert('hi , my here')} />
        <div  className="space" style={{height:1000}} />
        
      </header>
    </div>
  );
}

export default App;
