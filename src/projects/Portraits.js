import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Portraits = () => {
    const imageArray = [];

    for (var i = 1; i <= 28; i++) {
    imageArray.push(require('../img/portraits/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Portraits;


