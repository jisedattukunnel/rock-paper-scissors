import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main container-fluid">
        <h1>---Roak-Paper-Scissors---</h1>
        <div className="row">
          {/* <!-- <p>Player One</p> --> */}
          <div className="player-one col-md-6">
            <p>Player 1</p>
            <h1 id="one"></h1>
            <h1 id="score-one"></h1>
          </div>

          {/* <!-- <p>Player Two</p> --> */}
          <div className="palyer-two col-md-6">
            <p>Player 2</p>
            <h1 id="two"></h1>
            <h1 id="score-two"></h1>
          </div>
          <div className="col-md-4">
          </div>

          <button className="btn btn-success button col-md-4" onClick={play}>Play</button>

        </div>
        <button className=" btn-info button reload" onClick={refreshPage}>Reload</button>

      </div>
    </div>
  );
}


var numberOne = 0;
var numberTwo = 3;
var numberThree = 3;
let oneScore = 0;
let twoScore = 0;

function play() {
  // run this loop until numberOne is different than numberThree
  do {
    numberOne = Math.floor(Math.random() * 3);
  } while (numberOne === numberThree);
  // run this loop until numberTwo is different than numberThree and numberOne
  do {
    numberTwo = Math.floor(Math.random() * 3);
  } while (numberTwo === numberThree || numberTwo === numberOne);

  if (numberOne == 0) {
    document.getElementById("one").innerHTML = "STONE";
  } else if (numberOne == 1) {
    document.getElementById("one").innerHTML = "PAPER";
  } else {
    document.getElementById("one").innerHTML = "SCISSORS";
  }

  if (numberTwo == 0) {
    document.getElementById("two").innerHTML = "STONE";
  } else if (numberTwo == 1) {
    document.getElementById("two").innerHTML = "PAPER";
  } else {
    document.getElementById("two").innerHTML = "SCISSORS";
  }


  getResult(numberOne, numberTwo)

}


function getResult(numberOne, numberTwo) {
  //First Set
  if (numberOne == 0 && numberTwo == 0) {
    oneScore = oneScore + 0
    twoScore = twoScore + 0
  } else if (numberOne == 0 && numberTwo == 1) {
    twoScore = twoScore + 1
  } else if (numberOne == 0 && numberTwo == 2) {
    oneScore = oneScore + 1
  }


  //Second Set
  else if (numberOne == 1 && numberTwo == 0) {
    oneScore = oneScore + 1
  } else if (numberOne == 1 && numberTwo == 1) {
    oneScore = oneScore + 0
    twoScore = twoScore + 0
  } else if (numberOne == 1 && numberTwo == 2) {
    twoScore = twoScore + 1
  }


  //Third set
  else if (numberOne == 2 && numberTwo == 0) {
    twoScore = twoScore + 1
  } else if (numberOne == 2 && numberTwo == 1) {
    oneScore = oneScore + 1
  } else if (numberOne == 2 && numberTwo == 2) {
    oneScore = oneScore + 0
    twoScore = twoScore + 0
  }

  else {
    alert('Ha Ha Haaa....')

    return (oneScore, twoScore)
  }

  if (oneScore == 10) {
    alert('Player one wins !!')

  } else if (twoScore == 10) {
    alert('Player two wins !!')
  }



  console.log(oneScore);
  document.getElementById('score-one').innerHTML = oneScore;
  document.getElementById('score-two').innerHTML = twoScore;
}


function refreshPage() {
  window.location.reload(true);
}

export default App;



