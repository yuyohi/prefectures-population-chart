import { FC } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { css } from '@emotion/react';
import { prefDateChart } from './prefecture';

type Props = { dataList?: undefined | prefDateChart[] };

const chartStyle = css({
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Chart: FC<Props> = ({ dataList = undefined }) => {
  const DataFormatter = (num: number): string => {
    if (num > 1000000000) {
      return `${(num / 1000000000).toString()}B`;
    }
    if (num > 1000000) {
      return `${(num / 1000000).toString()}M`;
    }
    if (num > 1000) {
      return `${(num / 1000).toString()}K`;
    }

    return num.toString();
  };

  return (
    <ResponsiveContainer width="80%" height={500} css={chartStyle}>
      <LineChart
        data={dataList && dataList[0].data}
        margin={{ top: 20, bottom: 10 }}
      >
        {dataList?.map((data, index) => (
          <Line
            key={data.prefName}
            data={data.data}
            dataKey="value"
            xAxisId={index}
            name={data.prefName}
            stroke={data.color}
          />
        ))}
        {dataList?.map((data, index) => (
          <XAxis
            dataKey="year"
            xAxisId={index}
            hide={index !== 0}
            key={`xAxis${data.prefName}`}
          />
        ))}

        <CartesianGrid strokeDasharray="3 3" />
        <YAxis tickFormatter={DataFormatter} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
