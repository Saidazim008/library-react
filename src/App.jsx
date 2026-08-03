import React from 'react';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Yangisahifa from './component/yangisahifa/Yangisahifa';
import CustomSlider from './pages/customslider/CustomSlider'; // Yo'lni yana bir bor tekshiring
import SportCategories from './pages/sportcategories/SportCategories';
import Blakman from './pages/blakman/Blakman';
import GolfBanner from './pages/golfbanner/GolfBanner';
import StoryBanner from './pages/storybanner/StoryBanner';
import DiscoverPrizm from './pages/discoverprizm/DiscoverPrizm';
import OakleyServices from './pages/oakleyservices/OakleyServices';
import OakleyHub from './pages/oakleyhub/OakleyHub';
import Footer from './component/footer/Footer';
import MetaChatBot from './pages/metachatbot/MetaChatBot';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Yangisahifa />
      <CustomSlider />
      <SportCategories />
      <Blakman />
      <GolfBanner /> 
      <StoryBanner /> 
      <DiscoverPrizm />
      <OakleyServices /> 
      <OakleyHub />
      <Footer />
      <MetaChatBot />
    </div>
  );
};

export default App;