import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Hello World</p>
        <Link   href={"/next"}><a>다음 페이지로 이동하기</a></Link>
    </div>
  )
}
