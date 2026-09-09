import { Switch, Route } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import NewPatientsPage from "@/pages/new-patients";
import ContactPage from "@/pages/contact";
import PrivacyPage from "@/pages/privacy";
import AccessibilityPage from "@/pages/accessibility";
import NotFoundPage from "@/pages/not-found";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/new-patients" component={NewPatientsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/accessibility" component={AccessibilityPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
