/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FC, SyntheticEvent } from 'react';
import CheckBoxList from 'components/checkBox';
import usePrefectures from 'hooks/usePrefectures';

const CheckBoxForm: FC<{
  updateDrawPref: (checked: boolean, prefCode: number) => void;
}> = ({ updateDrawPref }) => {
  const prefectures = usePrefectures();

  const handleItemChange = (e: SyntheticEvent<HTMLInputElement>) => {
    updateDrawPref(e.currentTarget.checked, Number(e.currentTarget.value));
  };

  return (
    <CheckBoxList
      prefectureList={prefectures?.result}
      handleItemChange={handleItemChange}
    />
  );
};

export default CheckBoxForm;
