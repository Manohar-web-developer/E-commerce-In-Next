import React from 'react'
import Home from './pages/Home'
import '../assest/css/style.css'
import { poufUpSpace } from './API Sets/apiFetch';




export const metadata = {
  title: "Living Shapes: Modern Designs with Indian Craftsmanship",
  description: "Shop ready-to-ship modern furniture, premium lighting, and home decor accents online. ✓ 40+ years craftsmanship ✓ COD ✓ Fast &amp; Free Delivery",
};
export default async function page() {
  const poufsData = poufUpSpace()
  return (
    <div><Home poufsData = {poufsData}/></div>
  )
}