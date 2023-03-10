import { styled } from "@mui/system";

import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import Footer from "./components/Footer";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <BakeCard />
      <ReferralLink/>
      <NutritionFacts />
      <Footer />
    </Wrapper>
  );
}
