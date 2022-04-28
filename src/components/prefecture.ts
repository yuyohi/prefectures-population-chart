type Prefecture = {
  prefCode?: number;
  prefName?: string;
};

type Population = {
  year: number;
  value: number;
};

type PrefData = Prefecture & {
  data: Population[];
};

type prefDateChart = PrefData & {
  color: `hsl( ${number}, ${number}%, ${number}% )`;
};

export type { Prefecture, Population, PrefData, prefDateChart };
