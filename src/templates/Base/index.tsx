import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { LogoLinkProps } from '../../components/LogoLink';
import { Menu } from '../../components/Menu';
import { MenuLinkProps } from '../../components/MenuLink';
import * as Styled from './styles';

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  footerHtml: string;
  logoData: LogoLinkProps;
};

export const Base = ({ links, logoData, footerHtml, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};
