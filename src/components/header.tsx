import { FC } from 'react';
import { css } from '@emotion/react';

const headerStyle = css({
  backgroundColor: '#2196F3',
});

const Header: FC = () => (
  <header css={headerStyle}>
    <h1 css={{ color: 'white' }}>都道府県別 総人口グラフ</h1>
  </header>
);

export default Header;
