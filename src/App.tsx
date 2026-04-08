import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CurrencyProvider } from "@/hooks/useCurrency";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index.tsx";
import Eyewear from "./pages/Eyewear.tsx";
import FineJewelry from "./pages/FineJewelry.tsx";
import Fashion from "./pages/Fashion.tsx";
import Watches from "./pages/Watches.tsx";
import Fragrance from "./pages/Fragrance.tsx";
import Beauty from "./pages/Beauty.tsx";
import MensRings from "./pages/MensRings.tsx";
import Cufflinks from "./pages/Cufflinks.tsx";
import Auth from "./pages/Auth.tsx";
import Wishlist from "./pages/Wishlist.tsx";
import Settings from "./pages/Settings.tsx";
import FAQs from "./pages/FAQs.tsx";
import OurStory from "./pages/OurStory.tsx";
import Sustainability from "./pages/Sustainability.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CurrencyProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/eyewear" element={<Eyewear />} />
            <Route path="/fine-jewelry" element={<FineJewelry />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/fragrance" element={<Fragrance />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/mens-rings" element={<MensRings />} />
            <Route path="/cufflinks" element={<Cufflinks />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/sustainability" element={<Sustainability />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </CurrencyProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
