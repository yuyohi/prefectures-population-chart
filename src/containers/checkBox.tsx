/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { FC, SyntheticEvent } from 'react';
import CheckBoxList from 'components/checkBox';
import usePrefectures from 'hooks/usePrefectures';
import type { Prefectures } from 'hooks/usePrefectures';

const CheckBoxForm: FC<{
  updateOrder: (checked: boolean, prefCode: number, prefName: string) => void;
}> = ({ updateOrder }) => {
  const prefectures: Prefectures | undefined = usePrefectures();
  const handleItemChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(
      e.currentTarget.checked,
      e.currentTarget.value,
      e.currentTarget.name,
    );
    updateOrder(
      e.currentTarget.checked,
      Number(e.currentTarget.value),
      e.currentTarget.name,
    );
  };

  return (
    <CheckBoxList
      prefectureList={prefectures?.result}
      handleItemChange={handleItemChange}
    />
  );
};

export default CheckBoxForm;
