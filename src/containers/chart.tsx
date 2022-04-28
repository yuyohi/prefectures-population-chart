/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FC } from 'react';
import { ChangeOrder } from 'hooks/order';
import Chart from 'components/chart';
import usePrefDataList from 'hooks/usePrefDataList';

const EnhancedChart: FC<{ changeOrder: ChangeOrder | undefined }> = ({
  changeOrder,
}) => {
  const prefDataList = usePrefDataList(changeOrder);

  if (prefDataList.length === 0) {
    return <Chart key="empty" />;
  }

  return <Chart dataList={prefDataList} key="notEmpty" />;
};

export default EnhancedChart;
