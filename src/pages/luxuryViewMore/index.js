import { useLocation } from "react-router-dom";
import ArabicLuxuryViewMore from "./arabic/LuxuryViewMore";
import EnglishLuxuryViewMore from "./english/LuxuryViewMore";

const LuxuryViewMore = () => {
  const search = useLocation().search;
  const lang = new URLSearchParams(search).get("lang");

  if (lang === "eng") return <ArabicLuxuryViewMore />;
  else if (lang === "ar") return <EnglishLuxuryViewMore />;
  else return <EnglishLuxuryViewMore />;
};

export default LuxuryViewMore;
