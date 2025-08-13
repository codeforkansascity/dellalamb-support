import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { PageStateProvider } from "./contexts/PageStateContext";
import LanguageSelection from "./pages/LanguageSelection";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import Community from "./pages/Community";
import Messages from "./pages/Messages";
import ServiceCategory from "./pages/ServiceCategory";
import Food from "./pages/Food";
import EnglishClasses from "./pages/EnglishClasses";
import Employment from "./pages/Employment";
import Housing from "./pages/Housing";
import HealthSupport from "./pages/HealthSupport";
import Transportation from "./pages/Transportation";
import Legal from "./pages/Legal";
import Childcare from "./pages/Childcare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  const { hasCompletedLanguageSelection } = useLanguage();

  if (!hasCompletedLanguageSelection) {
    return <LanguageSelection />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/community" element={<Community />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/services/english-classes" element={<EnglishClasses />} />
      <Route path="/services/childcare" element={<Childcare />} />
      <Route path="/services/transportation" element={<Transportation />} />
      <Route path="/services/food" element={<Food />} />
      <Route path="/services/employment" element={<Employment />} />
      <Route path="/services/housing" element={<Housing />} />
      <Route path="/services/health-support" element={<HealthSupport />} />
      <Route path="/services/legal" element={<Legal />} />
      <Route path="/services/:categoryId" element={<ServiceCategory />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <PageStateProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </PageStateProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
