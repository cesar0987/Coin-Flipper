import './App.css';

function App() {
const tossCoin = () => {
    return Math.random() > 0.5 ? 'heads' : 'tails';
  };

function fiveHeads() {
  return new Promise( (resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;
      while(headsCount < 5) {
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);
          if(result === "heads") {
              headsCount++;
          } else {
              headsCount = 0;
          }
      }
      if (attempts <= 100) {
          resolve(`It took ${attempts} tries to flip five "heads"`);
      } else {
          reject(`Attempts have exceeded 100 tries`);
      }
  });
}
fiveHeads()
  .then( res => console.log(res) )
  .catch( err => console.log(err) );
console.log( "When does this run now?" );


  return (
    <div className="App">
 
    </div>
  );
}
export default App;
