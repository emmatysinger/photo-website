import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const NewYork = () => {
    const imageArray = [];

    for (var i = 1; i <= 20; i++) {
    imageArray.push(require('../img/new_york/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default NewYork;