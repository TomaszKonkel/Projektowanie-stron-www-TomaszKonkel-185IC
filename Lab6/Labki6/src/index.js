import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


class Parent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        name: "Xiaomi",
        model: "Mi note 10 Lite",
        screen_size: 6.47
        };
  }
	InicjalizowanieZegara() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  ResetowanieZegara() {
    clearInterval(this.timerID);
  }

  sekunda() {
    this.setState({
      date: new Date()
    });
  }

    render() {
        return (
            <div>
				<h2 className="glowny">Mamy godzine: {this.state.date.toLocaleTimeString()}.</h2>
				<p>Aktualny telefon</p>
                <Child name={this.state} />
				<p>Ranking marek telefonów</p>
                <Tabela tab={tab} />
            </div>
        );
    }
}

const Child = (props) => {
    return (
    <ul className="lista">
		
        <li>Nazwa telefonu: {props.name.name}</li>
        <li>Model: {props.name.model}</li>
        <li>Wielkość ekranu: {props.name.screen_size} cala</li>
    </ul>
        );
}
function Lista(props) {
 
  return <li>{props.value}</li>;
}
function Tabela(props) {
  const tab = props.tab;
  const tabelka = tab.map((number) =>
    
    <Lista key={number.toString()} value={number} />
  );
  return (
  
    <ol className="lista2">
      {tabelka}
    </ol>
  );
}
const tab = ["Samsung", "Xiaomi", "Redmi", "Sony", "Nokia"];
export default Parent;
ReactDOM.render(
  <React.StrictMode>
    <Parent />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();