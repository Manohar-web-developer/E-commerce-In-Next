
import Shop from './[slug]/Shop'
import '../../assest/css/style.css'
import ShopAll from './ShopAll'

export const metadata = {
  title: " All Products",
  description: "shop our complete range of furniture, home decor, kitchen accessories, and more! Buy now to discover unique pieces that elevate your living space.",
};
function page() {
  return (
    <>
        <ShopAll/>
    </>
  )
}

export default page