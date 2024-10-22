import styles from './button.module.scss';

export default function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.btn}>{children}</button>;
}
