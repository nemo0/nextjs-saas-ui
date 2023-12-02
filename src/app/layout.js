import { SidebarLayout } from "@/components/SidebarLayout";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SidebarLayout>{children}</SidebarLayout>
        </Providers>
      </body>
    </html>
  );
}
