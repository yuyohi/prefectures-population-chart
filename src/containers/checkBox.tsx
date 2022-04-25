import { FC, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import CheckBoxList from 'components/checkBox';
import assertIsDefined from 'helpers/assert';

type Prefectures = {
  message: null;
  result: {
    prefCode: number;
    prefName: string;
  }[];
};

const CheckBoxForm: FC = () => {
  const [prefectures, setPrefectures] = useState<Prefectures>();

  useEffect(() => {
    const api = process.env.React_APP_RESAS_API_KEY;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    assertIsDefined(api);

    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': api },
      })
      .then((res: AxiosResponse<Prefectures>) => {
        setPrefectures(res.data);
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  });

  return <CheckBoxList prefectureList={prefectures?.result} />;
};

export default CheckBoxForm;
