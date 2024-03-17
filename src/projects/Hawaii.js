import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Hawaii = () => {
    const imageArray = [];

    for (var i = 1; i <= 16; i++) {
    imageArray.push(require('../img/hawaii/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Hawaii;


