import logo from './logo.svg';
import './App.css';
import Hello from'./component/Hello'

//모든 컴포넌트는 대문자로 시작해야한다.
function App() {
  const name = "Jaeho";
  const naver = {
    name: "네이버",
    url: "https://naver.com/",
  }
  return (
    <div className="App">
      <Hello/>
      <h1>Hello {name}.<p>{2+3}</p></h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
