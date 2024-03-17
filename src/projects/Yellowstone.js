import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Yellowstone = () => {
    const imageArray = [];

    for (var i = 1; i <= 11; i++) {
    imageArray.push(require('../img/yellowstone/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Yellowstone;