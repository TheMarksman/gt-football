import logo from './logo.svg';
import './App.css';
import gtFootballData from './gt_football_data.json';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function App() {
  console.log(gtFootballData);

  return (
    <div className="App">
      <LineChart
        width={500}
        height={300}
        data={gtFootballData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="win" stroke="#2D882D" />
        <Line type="monotone" dataKey="pointsPerGame" stroke="#226666" />
        <Line type="monotone" dataKey="avgPointsPerGameAllowed" stroke="#AA3939" />
      </LineChart>
    </div>
  );
}

export default App;
