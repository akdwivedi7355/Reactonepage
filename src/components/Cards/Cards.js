import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Cards() {
  return (
    <section className='card-section spacing-large'>
      <div className='cacontaine'>
        <div className='card-container'>
          <div className='card-item'>
            <i>icon</i>
            <h4>Heading 1</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi eveniet voluptate illum aperiam facere quam ducimus...</p>
          </div>
          <div className='card-item'>
            <i>icon</i>
            <h4>Heading 2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi eveniet voluptate illum aperiam facere quam ducimus...</p>
          </div>
          <div className='card-item'>
            <i>icon</i>
            <h4>Heading 3</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi eveniet voluptate illum aperiam facere quam ducimus...</p>
          </div>
          <div className='card-item'>
            <FontAwesomeIcon  className="iconcards" icon={faHouse} />
            <h4>Heading 4</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi eveniet voluptate illum aperiam facere quam ducimus...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
