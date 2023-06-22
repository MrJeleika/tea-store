"use client";

import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "./redux/app/hooks";
import { setCounter } from "./redux/slice/appSlice";

export default function Home() {
  const { counter } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <main className={styles.main}>
      {counter}
      <button onClick={() => dispatch(setCounter(counter + 1))}>asdasd</button>
    </main>
  );
}
