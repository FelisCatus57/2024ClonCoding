import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const url = 'http://localhost:8080/login';
const data = {
    username: 'test',
    password: 'test123',
};
const config = { 'Content-Type': 'application/json' };

const click = () => {
    axios.defaults.withCredentials = true; // withCredentials 전역 설정
    axios
        .post(url, data, config)
        .then((res) => {
            if (res.status === 200) {
                let accessToken = res.headers['authorization'];
                console.log('access 토큰 :', accessToken);
            }
        })
        .catch((error) => console.log(error));
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={click}>click!</button>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
