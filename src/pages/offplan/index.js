import { useLocation } from "react-router-dom";
import ArabicOffplan from "./arabic/Offplan";
import EnglishOffplan from "./english/Offplan";

const Offplan = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get("lang");

  if (lang === "eng") return <EnglishOffplan />;
  else if (lang === "ar") return <ArabicOffplan />;
  else return <EnglishOffplan />;
};

export default Offplan;
