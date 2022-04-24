import { FC } from 'react';
import CheckBoxList from './components/checkBox';
import Header from './components/header';

const PrePopulationChart: FC = () => (
  <div className="app">
    <Header />
    <CheckBoxList />
  </div>
);

export default PrePopulationChart;
