import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import '../assest/css/style.css'



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
