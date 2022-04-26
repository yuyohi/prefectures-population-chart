import { FC, useState } from 'react';
import Header from './components/header';
import CheckBoxForm from './containers/checkBox';
import Chart from './components/chart';

const PrePopulationChart: FC = () => {
  const [drawPref, setDrawPref] = useState<Set<number>>(new Set());

  const updateDrawPref = (checked: boolean, prefCode: number) => {
    const newDrawPref = new Set(drawPref);
    if (checked) {
      newDrawPref.add(prefCode);
    } else {
      newDrawPref.delete(prefCode);
    }
    setDrawPref(newDrawPref);
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <CheckBoxForm updateDrawPref={updateDrawPref} />
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default PrePopulationChart;
