import './App.css';

import swiss from './assets/cheese/swiss.png';
import cheddar from './assets/cheese/cheddar.jpg';
import mCheddar from './assets/cheese/mildcheddar.jpg';
import sCheddar from './assets/cheese/sharpcheddar.jpg';
import gouda from './assets/cheese/gouda.jpg';
import brie from './assets/cheese/brie.jpg';

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAAIJLkr2wjGCZ6ZayS7VRthZyzlq1fsv0",
  authDomain: "cheese-review.firebaseapp.com",
  projectId: "cheese-review",
  storageBucket: "cheese-review.appspot.com",
  messagingSenderId: "981889231452",
  appId: "1:981889231452:web:622bbeb55fafb25d1f5499",
  measurementId: "G-5ZEPVVJ6VP"
};

//firebase.initializeApp(firebaseConfig);
//const database = firebase.database();

let cheeses = {
  1: [swiss,"Swiss Cheese"],
  2: [cheddar,"Cheddar"],
  3: [mCheddar,"Mild Cheddar"],
  4: [sCheddar,"Sharp Cheddar"],
  5: [gouda,"Gouda"],
  6: [brie,"Brie Cheese"]
}

const randomKey = Object.keys(cheeses)[Math.floor(Math.random() * Object.keys(cheeses).length)];

let cheese = cheeses[randomKey];
//let cheese = cheeses[1];
let cheesePath = cheese[0];
let cheeseName = cheese[1];

function App() {
  function refreshPage() {
    window.location.reload();
  }

  /*
  const saveCheese = (cheeseName, rating) => {
      const cheeseRef = database.ref('cheeses').push();
      cheeseRef.set({
          name: cheeseName,
          rating: rating,
      });
   */
  }


  function completedPage(rating) {
    let completeWindow = document.getElementById("CompleteWindow");
    let rateWindow = document.getElementById("RateBox");
    completeWindow.style.display = "block";
    rateWindow.style.display = "none";
    console.log(rating);
    //saveCheese(cheeseName,rating);
  }

  return (
      <div className="App">
        <header className="App-header">
          <div className="Main" id="CompleteWindow">
            <h1 className="TodaysCheese">
              Thank you!
            </h1>
            <h3 className="SubCheese">
              Your rating has been saved.
            </h3>
            <div className="RatingBar">
              <button className="BtnRating" onClick={refreshPage}>
                <p className="BtnRatingText">
                  Rank Another
                </p>
              </button>
            </div>
          </div>
          <div className="Main" id="RateBox">
            <div className="HeadImgContainer">
              <img src={cheesePath} alt="⠀" className="HeadImg"/>
            </div>
            <div className="BodyContainer">
              <div className="BodyTitle">
                <h1 className="TodaysCheese">
                  Rank a Cheese
                </h1>
                <h3 className="SubCheese">
                  {cheeseName}
                </h3>
              </div>
              <div className="RatingContainer">
                <p className="p">
                  Rate {cheeseName} out of 5:
                </p>
                <div className="RatingBar">
                  <button className="BtnRating" onClick={() => completedPage(1)}>
                    <p className="BtnRatingText">
                      1 🤮
                    </p>
                  </button>
                  <button className="BtnRating" onClick={() => completedPage(2)}>
                    <p className="BtnRatingText">
                      2 😖
                    </p>
                  </button>
                  <button className="BtnRating" onClick={() => completedPage(3)}>
                    <p className="BtnRatingText">
                      3 😐
                    </p>
                  </button>
                  <button className="BtnRating" onClick={() => completedPage(4)}>
                    <p className="BtnRatingText">
                      4 🙂
                    </p>
                  </button>
                  <button className="BtnRating" onClick={() => completedPage(5)}>
                    <p className="BtnRatingText">
                      5 😋
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
}

export default App;
