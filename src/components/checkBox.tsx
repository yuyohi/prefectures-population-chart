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

const LabelStyle = css({
  display: 'inline-block',
  fontSize: '1.2em',
  padding: '5px',
  cursor: 'pointer',
});

const checkBoxStyle = css({
  boxSizing: 'border-box',
  cursor: 'pointer',
  position: 'relative',
  width: '1.2em',
  height: '1.2em',
});

const CheckBox: FC<PrefectureProps> = ({
  prefCode = -1,
  prefName = '未設定',
  handleItemChange = () => undefined,
}) => (
  <label htmlFor={`prefecture-${prefCode}`} css={LabelStyle}>
    <input
      type="checkbox"
      name={prefName}
      value={prefCode}
      id={`prefecture-${prefCode}`}
      onChange={handleItemChange}
      css={checkBoxStyle}
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
