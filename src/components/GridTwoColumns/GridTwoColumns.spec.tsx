import { vi } from 'vitest';
import { GridTwoColumns } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

vi.mock('next/image', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line
    default: ({ src, alt }) => <img src={src} alt={alt} />,
  };
});
