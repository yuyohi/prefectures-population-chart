import { FC, SyntheticEvent } from 'react';
import { css } from '@emotion/react';
import { Prefecture } from './prefecture';

type PrefectureProps = Prefecture & {
  handleItemChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
};

type PrefectureList = {
  prefectureList?: Prefecture[];
  handleItemChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
};

const checkBoxStyle = css({
  display: 'inline-block',
});

const CheckBox: FC<PrefectureProps> = ({
  prefCode = -1,
  prefName = '未設定',
  handleItemChange = () => undefined,
}) => (
  <label htmlFor={`prefecture-${prefCode}`} css={checkBoxStyle}>
    <input
      type="checkbox"
      name={prefName}
      value={prefCode}
      id={`prefecture-${prefCode}`}
      onChange={handleItemChange}
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
  handleItemChange = () => undefined,
}) => (
  <>
    {prefectureList.map((prefecture) => {
      const { prefCode, prefName } = prefecture;

      return (
        <CheckBox
          key={prefCode}
          prefCode={prefCode}
          prefName={prefName}
          handleItemChange={handleItemChange}
        />
      );
    })}
  </>
);

export default CheckBoxList;
