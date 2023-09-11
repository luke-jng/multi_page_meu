import { navBar, logoClick, tabClickLightUp} from './navBar';
import { homeContentElems, homeTabClick } from './home';
import { drinkTabClick } from './drinksMenu';
import { pastriesTabClick } from './pastriesMenu';
import { aboutUsClick } from './aboutUs';
import { contactUsTabClick } from './contactUs';
import { footerElem } from './footer';
import "./style.css";


navBar();
tabClickLightUp();
footerElem()
logoClick();
homeContentElems();
homeTabClick();
drinkTabClick();
pastriesTabClick();
aboutUsClick();
contactUsTabClick();