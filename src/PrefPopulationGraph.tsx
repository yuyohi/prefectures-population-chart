import { FC } from 'react';
import CheckBoxList from './components/checkBox';
import Header from './components/header';

const PrePopulationGraph: FC = () => (
  <div className="app">
    <Header />
    <CheckBoxList />
  </div>
);

export default PrePopulationGraph;
