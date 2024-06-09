import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import GridClicking from './components/grid/Grid'

function App() {
  console.log('alfjnadskjfnasdkf');
  // const data = [[1,1,1, 1, 1], [1,0,0, 1, 0], [1,1,1]];
  // const items = new Array(9).fill(0).map((i,j) => {return `Itesfadsfasdljfnadslkjfanlsdkjfnm ${j+1}`; } );
  return (
    <div className="App">
      {/* <Menu options={items} initialSelection={items[1]}/> */}
      {/* <GridClicking data={data}/> */}
    </div>
  );
}

export default App;
