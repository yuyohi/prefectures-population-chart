/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import cloneDeep from 'lodash/cloneDeep';
import seedrandom from 'seedrandom';
import assertIsDefined from 'helpers/assert';
import { ChangeOrder } from 'hooks/order';
import { Population, prefDateChart } from 'components/prefecture';

type PopulationTransit = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: Population[];
    }[];
  };
};

const usePrefDataList = (changeOrder: ChangeOrder | undefined) => {
  const [prefDataList, setPresDataList] = useState<prefDateChart[]>([]);

  const getPrefData = (code: number, name: string) => {
    const api = process.env.React_APP_RESAS_API_KEY;

    assertIsDefined(api);

    axios
      .get(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${code}`,
        { headers: { 'X-API-KEY': api } },
      )
      .then((res: AxiosResponse<PopulationTransit>) => {
        setPresDataList((prev) => {
          console.log(prev);
          const newDatalist = cloneDeep(prev);
          const totalPopulation = res.data.result.data[0].data;

          const rng = seedrandom(name);
          const h = Math.trunc(rng() * 360);
          const s = Math.trunc(rng() * 10) + 60;
          const l = 50;

          newDatalist.push({
            prefCode: code,
            prefName: name,
            data: totalPopulation,
            color: `hsl( ${h}, ${s}%, ${l}% )`,
          });

          return newDatalist;
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };

  useEffect(() => {
    if (changeOrder !== undefined) {
      const { order, prefCode, prefName } = changeOrder;
      if (order === 'delete') {
        setPresDataList((prev) => {
          const newDatalist = cloneDeep(prev);

          newDatalist.filter((data) => data.prefCode !== prefCode);

          return newDatalist.filter((data) => data.prefCode !== prefCode);
        });
      } else if (order === 'add') {
        getPrefData(prefCode, prefName);
      }
    }
  }, [changeOrder]);

  return prefDataList;
};

export default usePrefDataList;
