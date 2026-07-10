
import FurnitureMenu from "./MenuGrid/FurnitureMenu";
import HomeDecor from "./MenuGrid/HomeDecor";
import Kitchenware from "./MenuGrid/Kitchenware";
import Lighting from "./MenuGrid/Lighting";

function MegaMenu({ activeMenu }) { 
  return (
  <> 
  {activeMenu === "furniture" && <FurnitureMenu />} 
  {activeMenu === "home-decor" && <HomeDecor />} 
  {activeMenu === "lighting" && <Lighting />} 
  {activeMenu === "kitchenware" && <Kitchenware/>} 
  </>

  );

}


export default MegaMenu;