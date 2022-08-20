import { GetStaticPaths, GetStaticProps } from 'next';
import { loadPages } from '../api/load-pages';
import Home, { HomeProps } from '../templates/Home';

export default function Page({ data }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug as string);
  } catch (e) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
