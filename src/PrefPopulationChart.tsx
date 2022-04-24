import { FC } from 'react';
import CheckBoxList from './components/checkBox';
import Header from './components/header';
import Chart from './components/Chart';

const PrePopulationChart: FC = () => (
  <div className="app">
    <div>
      <Header />
    </div>
    <div>
      <CheckBoxList />
    </div>
    <div>
      <Chart />
    </div>
  </div>
);

export default PrePopulationChart;
