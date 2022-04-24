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
import { Prefecture } from './prefecture';

type Population = {
  year: number;
  value: number;
};

type Data = Prefecture & {
  data: Population[];
};

type Props = { dataList?: undefined | Data[] };

const Chart: FC<Props> = ({ dataList = undefined }) => (
  <ResponsiveContainer width="80%" height={500}>
    <LineChart data={dataList && dataList[0].data}>
      {dataList?.map((data) => (
        <Line data={data.data} dataKey="value" name={data.prefName} />
      ))}
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Legend />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
