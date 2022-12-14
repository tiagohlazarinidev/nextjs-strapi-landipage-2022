import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

vi.mock('next/image', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line
    default: ({ src, alt }) => <img src={src} alt={alt} />,
  };
});

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(container).toMatchSnapshot();
  });
});
