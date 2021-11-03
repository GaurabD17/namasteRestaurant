// import React from 'react';
// import CustomParallax from '../components/CustomParallax'

// export default function Error() {
//     return (
//         <CustomParallax title='404 Page Not Found' height={700} text="Sorry...
//             We couldn't find the page you were looking for. This is either because:
//             There is an error in the URL entered into your web browser. Please check the URL and try again.
//             The page you are looking for has been moved or deleted."/>
//     );
// }
import React from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from '../assets/home_top.jpg'
import home_sitting from '../assets/home_sitting.jpg'
import home_kitchen from '../assets/home_kitchen.jpg'
import KitchenNames from "../components/KitchenNames";
import HomeCards from "../components/HomeCards";
import CustomContainer from "../components/CustomContainer";
import ColumnsContainer from "../components/ColumnsContainer";

export default function Home() {
    return (
        <React.Fragment className='Home'>
            <CustomParallax title='home cuisine' text="Voted IDC's Best Nepalese Restaurant" img={home_top} height='40em'/>
            <CustomContainer/>
            <CustomParallax title='eat together'
                            text='Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour — even dessert.'
                            img={home_sitting} height='30em'/>
            <HomeCards/>
            <ColumnsContainer/>
            <CustomParallax title='the kitchen' img={home_kitchen} height='40em'/>
            <KitchenNames/>
        </React.Fragment>
    );
}