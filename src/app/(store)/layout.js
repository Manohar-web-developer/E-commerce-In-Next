import "../assest/css/style.css";
import MainLayout from "./MainLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <MainLayout>
            {children}
          </MainLayout>
      </body>
    </html>
  );
}