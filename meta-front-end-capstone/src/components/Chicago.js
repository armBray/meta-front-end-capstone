import image1 from '../assets/card/others/Mario and Adrian A.jpg'
import image2 from '../assets/card/others/Mario and Adrian b.jpg'


function Chicago() {
    return (
      <main id='chicago'>
      <div className="main-chicago">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
        <div className="aboutus-images-grid">
          <div className="photo-cont-1">
            <img src={image1} alt="restauran food image1" />
          </div>
          <div className="photo-cont-2">
            <img src={image2} alt="restauran food image2" />
          </div>
        </div>
      </div>
      </main>
    );
  }

export default Chicago;
