import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Cars = () => {
    const imageArray = [];

    for (var i = 1; i <= 10; i++) {
    imageArray.push(require('../img/cars/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Cars;


