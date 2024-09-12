import Hero from './component/LandingPage/Hero';
import Onchain from './component/LandingPage/Onchain';
import Features from './component/LandingPage/Features';
import Security from './component/LandingPage/Security';
import Build from './component/LandingPage/Build';
import Partners from './component/LandingPage/Partners';
import { crimson, inter } from './utils/fonts';
import FeaturesNew from './component/LandingPage/FeaturesNew';
import Integrations from './component/LandingPage/Integrations';
export default function Home() {
  return (
    <div className={`w-full h-full relative bg-black ${crimson.variable} ${inter.variable}`}>
      <Hero />
      <FeaturesNew />
      <Integrations />
      {/* <Onchain /> */}
      {/* <Features /> */}
      <Security />
      {/* <Partners /> */}
      <Build />
    </div>
  );
}
