import { FC } from 'react';

type Prefecture = {
  prefCode?: number;
  prefName?: string;
};

type PrefectureProps = Prefecture & {
  drawGraph?: () => void;
};

type PrefectureList = {
  prefectureList?: Prefecture[];
  drawGraph?: () => void;
};

const CheckBox: FC<PrefectureProps> = ({
  prefCode = -1,
  prefName = '未設定',
  drawGraph = () => undefined,
}) => (
  <label htmlFor={`prefecture-${prefCode}`}>
    <input
      type="checkbox"
      name="prefectures"
      value={prefCode}
      id={`prefecture-${prefCode}`}
      onChange={drawGraph}
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
  drawGraph = () => undefined,
}) => (
  <div>
    {prefectureList.map((prefecture) => {
      const { prefCode, prefName } = prefecture;

      return (
        <CheckBox
          prefCode={prefCode}
          prefName={prefName}
          drawGraph={drawGraph}
        />
      );
    })}
  </div>
);

export default CheckBoxList;