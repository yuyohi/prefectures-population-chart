import { FC } from 'react';
import Header from './components/header';
import CheckBoxForm from './containers/checkBox';
import Chart from './components/Chart';

const PrePopulationChart: FC = () => (
  <div className="app">
    <div>
      <Header />
    </div>
    <div>
      <CheckBoxForm />
    </div>
    <div>
      <Chart />
    </div>
  </div>
);

export default PrePopulationChart;
