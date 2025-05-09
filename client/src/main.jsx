import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics
import PremiumPage from "./routes/PremiumPage.jsx";
import Ministries from "./routes/Ministries.jsx";
const queryClient = new QueryClient();
import Services from "./routes/Services.jsx";
// Hardcoded Clerk publishable key

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_live_Y2xlcmsubWFrZXNvbWF3YXkuY29tJA";

if (!clerkPublishableKey) {
    throw new Error("Missing Clerk Publishable Key!");
}
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/Ministries",
        element: <Ministries />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" />
        <Analytics />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
