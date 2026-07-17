
import '../../assest/css/style.css'
import MainLayout from "./MainLayout"; import ParentRoot from './ParentRoot';
;



export default function RootLayout({ children }) {
  return (
    <html>
      <body>

      

          <ParentRoot>
            {children}
          </ParentRoot>
      </body>
    </html>
  );
}
