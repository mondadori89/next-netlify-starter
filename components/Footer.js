import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo_pmf_transparent.png" alt="PMF Logo" className={styles.logo} />
      </footer>
    </>
  )
}
