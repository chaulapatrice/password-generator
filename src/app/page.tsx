import styles from "./page.module.scss";
import Home from "@/app/components/Home";

export default function Page() {
    return (
        <main className={styles.main}>
            <Home/>
        </main>
    );
}
