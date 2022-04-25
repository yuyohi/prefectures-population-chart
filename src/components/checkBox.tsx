import { FC } from 'react';
import { Prefecture } from './prefecture';

type PrefectureProps = Prefecture & {
  drawChart?: () => void;
};

type PrefectureList = {
  prefectureList?: Prefecture[];
  drawChart?: () => void;
};

const CheckBox: FC<PrefectureProps> = ({
  prefCode = -1,
  prefName = '未設定',
  drawChart = () => undefined,
}) => (
  <label htmlFor={`prefecture-${prefCode}`}>
    <input
      type="checkbox"
      name="prefectures"
      value={prefCode}
      id={`prefecture-${prefCode}`}
      onChange={drawChart}
    />
    {prefName}
  </label>
);

const CheckBoxList: FC<PrefectureList> = ({
  prefectureList = [
    {
      prefCode: -1,
      prefName: '未設定',
    },
  ],
  drawChart = () => undefined,
}) => (
  <>
    {prefectureList.map((prefecture) => {
      const { prefCode, prefName } = prefecture;

      return (
        <CheckBox
          key={prefCode}
          prefCode={prefCode}
          prefName={prefName}
          drawChart={drawChart}
        />
      );
    })}
  </>
);

export default CheckBoxList;
