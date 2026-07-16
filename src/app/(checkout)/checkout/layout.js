
import '../../assest/css/style.css'
import MainLayout from "./MainLayout";



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
       <MainLayout>

       {children}
       </MainLayout>
      </body>
    </html>
  );
}
