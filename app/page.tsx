'use client';

import { useEffect, useState } from 'react';
import client from './contentful';
import styles from './page.module.css';
import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { setCounter } from './redux/slice/appSlice';
import { TeaRow } from './Components/TeaRow/TeaRow';
import { TopTea } from './Components/TopTea/TopTea';

export default async function Home() {
  const { counter } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const [teas, setTeas] = useState();

  // useEffect(() => {
  //   client
  //     .getEntries({
  //       content_type: 'tea',
  //     })
  //     .then((entries) => console.log(entries.items));
  // }, []);

  return (
    <main className={styles.main}>
      <TeaRow />
      <TopTea />
    </main>
  );
}
