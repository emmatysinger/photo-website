import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const NewEngland = () => {
    const imageArray = [];

    for (var i = 1; i <= 7; i++) {
    imageArray.push(require('../img/new_england/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default NewEngland;