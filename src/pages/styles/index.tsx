import React, { FC } from 'react';
import Layout from 'components/layout/Layout';
import Artwork from 'components/styles/Artwork';
import { GetStaticProps } from 'next';
import { findAllStyles } from 'repositories/styleRepository';
import { Style } from 'models/Style';

export interface IndexProps {
  styles: Style[];
}

const Index: FC<IndexProps> = props => {
  const { styles } = props;
  return (
    <Layout>
      <Artwork styles={styles} />
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      styles: findAllStyles(),
    },
  };
};
