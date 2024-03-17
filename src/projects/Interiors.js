import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Interiors = () => {
    const imageArray = [];

    for (var i = 1; i <= 8; i++) {
    imageArray.push(require('../img/interiors/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Interiors;