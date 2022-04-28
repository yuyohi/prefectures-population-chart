import { FC, useState } from 'react';
import Header from './components/header';
import CheckBoxForm from './containers/checkBox';
import EnhancedChart from './containers/chart';
import { ChangeOrder } from './hooks/order';

const PrePopulationChart: FC = () => {
  const [latestOrder, setLatestOrder] = useState<ChangeOrder>();

  const updateOrder = (
    checked: boolean,
    prefCode: number,
    prefName: string,
  ) => {
    if (checked) {
      setLatestOrder({ order: 'add', prefCode, prefName });
    } else {
      setLatestOrder({ order: 'delete', prefCode, prefName });
    }
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <CheckBoxForm updateOrder={updateOrder} />
      </div>
      <div>
        <EnhancedChart changeOrder={latestOrder} />
      </div>
    </div>
  );
};

export default PrePopulationChart;
