import './App.css';
import img from '../src/img/image-victor.jpg';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <div className='card'>
           <div><img src={img} alt=''  /></div>
            <p>
              Osomhe Aleogho<span>24</span>
              
              <span>Nigeria</span>
            </p>
            <div className='profile-info'>
              <div>
                800K
                <span>Likes</span>
              </div>
              <div>
                1M
                <span>Followers</span>
              </div>
              <div>
                700K
                <span>Photo</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
