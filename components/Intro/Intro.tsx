import React from 'react';
import Typography from '@mui/material/Typography';

import styles from './Intro.module.scss';

const Intro: React.FC = () => (
  <section className={styles.container}>
    <Typography variant="h1" className={styles.title}>
      Headless Nameless
    </Typography>
  </section>
);

export default Intro;
