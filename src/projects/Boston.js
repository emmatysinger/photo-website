import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Boston = () => {
    const imageArray = [];

    for (var i = 1; i <= 30; i++) {
    imageArray.push(require('../img/boston/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Boston;