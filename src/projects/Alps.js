import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Alps = () => {
    const imageArray = [];

    for (var i = 1; i <= 25; i++) {
    imageArray.push(require('../img/alps/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Alps;


