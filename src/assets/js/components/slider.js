import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

export default {

    buildSliderMaisVendidos: () => {
        tns({
            container: '#products__carousel',
            items: 4,
            center: true,
            loop: true,
            prevButton: true,
            nextButton: true,
            navPosition: 'bottom',
            autoplay: false,
            speed: 600,
            controls: true,
            arrowKeys: true,
            controlsText: ['<', '>']
        });
    }

}