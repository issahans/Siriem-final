import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Our Approach & Offerings
import OurApproach from "./pages/our-approach";
import OurOfferings from "./pages/our-offerings";

// Product Pages
import ACChargers from "./pages/page/ac-chargers";
import DCChargers from "./pages/page/dc-chargers";
import ChargingManagementSystem from "./pages/page/charging-management-system";
import OnboardChargers from "./pages/page/onboard-chargers";

// Service Pages
import ChargerServices from "./pages/page/charger-services";
import CMSServices from "./pages/page/cms-services";
import Consulting from "./pages/page/consulting";
import Solutions from "./pages/page/solutions";

// Verticals
import Fleets from "./pages/verticals/fleets";
import Workplace from "./pages/verticals/workplace";
import Residential from "./pages/verticals/residential";
import CPOs from "./pages/verticals/cpos";
import RetailHospitality from "./pages/verticals/retail-hospitality";
import EnergyStorage from "./pages/verticals/energy-storage";

// OEM Pages
import EVOEMs from "./pages/page/evoems";
import EVSEOEMs from "./pages/page/evseoems";

// Innovation Pages
import TechSpeak from "./pages/innovation/tech-speak";
import UpcomingReleases from "./pages/innovation/upcoming-releases";

// Company Pages
import AboutUs from "./pages/page/about-us";
import Team from "./pages/page/team";
import ContactUs from "./pages/page/contact-us";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          
          {/* Our Approach & Offerings */}
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/our-offerings" element={<OurOfferings />} />
          
          {/* Product Pages */}
          <Route path="/page/ac-chargers" element={<ACChargers />} />
          <Route path="/page/dc-chargers" element={<DCChargers />} />
          <Route path="/page/charging-management-system" element={<ChargingManagementSystem />} />
          <Route path="/page/onboard-chargers" element={<OnboardChargers />} />
          
          {/* Service Pages */}
          <Route path="/page/charger-services" element={<ChargerServices />} />
          <Route path="/page/cms-services" element={<CMSServices />} />
          <Route path="/page/consulting" element={<Consulting />} />
          <Route path="/page/solutions" element={<Solutions />} />
          
          {/* Verticals */}
          <Route path="/verticals/fleets" element={<Fleets />} />
          <Route path="/verticals/workplace" element={<Workplace />} />
          <Route path="/verticals/residential" element={<Residential />} />
          <Route path="/verticals/cpos" element={<CPOs />} />
          <Route path="/verticals/retail-hospitality" element={<RetailHospitality />} />
          <Route path="/verticals/energy-storage" element={<EnergyStorage />} />
          
          {/* OEM Pages */}
          <Route path="/page/evoems" element={<EVOEMs />} />
          <Route path="/page/evseoems" element={<EVSEOEMs />} />
          
          {/* Innovation */}
          <Route path="/innovation/tech-speak" element={<TechSpeak />} />
          <Route path="/innovation/upcoming-releases" element={<UpcomingReleases />} />
          
          {/* Company */}
          <Route path="/page/about-us" element={<AboutUs />} />
          <Route path="/page/team" element={<Team />} />
          <Route path="/page/contact-us" element={<ContactUs />} />
          
          {/* 404 - Keep this last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;