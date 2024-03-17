import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Architecture = () => {
    const imageArray = [];

    for (var i = 1; i <= 18; i++) {
    imageArray.push(require('../img/architecture/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Architecture;