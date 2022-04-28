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
import { prefDateChart } from './prefecture';

type Props = { dataList?: undefined | prefDateChart[] };

const Chart: FC<Props> = ({ dataList = undefined }) => (
  <ResponsiveContainer width="80%" height={500}>
    <LineChart data={dataList && dataList[0].data}>
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
      <YAxis />
      <Legend />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
