import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Graduation = () => {
    const imageArray = [];

    for (var i = 1; i <= 33; i++) {
    imageArray.push(require('../img/graduation/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Graduation;


