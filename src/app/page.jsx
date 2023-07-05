import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button href="/portfolio" title="See Our Works" />
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="qwe" className={styles.heroImg} />
      </div>
    </section>
  );
}

// ===
// Image from public foulder doesn't need written width and height attributes.  We can write it in the styles folder

//  <Image src={Hero} alt="qwe" />

// ===
//image somevhere from browser needs config in next.config.js

// === next.config.js ===
// const nextConfig = {
//   images: {
//     domains: ["images.pexels.com", "images.pexels.com"],
//   },
// };

// ===
// <Image
//       src="https://images.pexels.com/photos/17336461/pexels-photo-17336461.jpeg?auto=compress&cs=tinysrgb&w=800"
//       alt=""
//       width={200}
//       height={250}
//     />
