import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Film = () => {
    const imageArray = [];

    for (var i = 1; i <= 15; i++) {
    imageArray.push(require('../img/film/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Film;


