import { FC } from 'react';

type Prefecture = {
  prefCode?: number;
  prefName?: string;
};

type PrefectureProps = Prefecture & {
  draChart?: () => void;
};

type PrefectureList = {
  prefectureList?: Prefecture[];
  draChart?: () => void;
};

const CheckBox: FC<PrefectureProps> = ({
  prefCode = -1,
  prefName = '未設定',
  draChart = () => undefined,
}) => (
  <label htmlFor={`prefecture-${prefCode}`}>
    <input
      type="checkbox"
      name="prefectures"
      value={prefCode}
      id={`prefecture-${prefCode}`}
      onChange={draChart}
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
  draChart = () => undefined,
}) => (
  <div>
    {prefectureList.map((prefecture) => {
      const { prefCode, prefName } = prefecture;

      return (
        <CheckBox prefCode={prefCode} prefName={prefName} draChart={draChart} />
      );
    })}
  </div>
);

export default CheckBoxList;
