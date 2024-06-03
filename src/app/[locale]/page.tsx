import { useTranslations } from "next-intl";
import Header from "../components/Header/header";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <Header/>
    </main>
  );
}
