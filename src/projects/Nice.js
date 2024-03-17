import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Nice = () => {
    const imageArray = [];

    for (var i = 1; i <= 30; i++) {
    imageArray.push(require('../img/nice/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Nice;


