function calculateSum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Make a fetch request to the server
    fetch(`https://iped2e.vercel.app/add?numA=${num1}&numB=${num2}`, {
      method: 'GET',
      headers: {
        'Origin': 'http://1asdasfasd.1:55aa',
        'Referer': 'http://1asdasfasd.1:55aa'
      },
      mode: 'cors'

    })
      .then(response => response.text())
      .then(data => {
        // Display the result on the webpage
        console.log(data);
        document.getElementById("results").innerText = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  function getData() {
    const firebaseConfig = {
      apiKey: "AIzaSyD6r-_MvDdViE9Vt3hbYu5fU63dOidtwBs",
      authDomain: "hc-app-b89d2.firebaseapp.com",
      projectId: "hc-app-b89d2",
      storageBucket: "hc-app-b89d2.appspot.com",
      messagingSenderId: "487867297034",
      appId: "1:487867297034:web:324472b89bfea06fd99ef3",
      measurementId: "G-3EP99P9EFN"
    };
  

firebase.initializeApp(firebaseConfig);
var appDB = firebase.firestore();

    appDB.collection("patients").get().then(querySnapshot => {
      var resultText;
        querySnapshot.forEach(doc => {
            // doc.data() is the data of each document
            console.log(doc.id, " => ", doc.data());
            resultText += doc.id + " => " + JSON.stringify(doc.data()) + "\n";

            // You can manipulate the data as needed and display it on your HTML
        });
        document.getElementById("results").innerText = resultText;

    }).catch(error => {
        console.log("Error getting documents: ", error);
    });


}

const resultsArray = [];

function getDataNewTech() {

var key =  'U2FsdGVkX1/1Vs7j1QSexGQbQaCShLiRtkp0LzEIYM7jqcMNl4f79fUYGp4NFSlr128E1p+Q393xukCeYhwfZ7KPN9Ht3SctQxxnO83KLjgwjFiNl+zJCvmqOy2b4b09zKYeyzLwJ+ovnOlLyzCLsYJSvoHgeCd6qxO14vARw0xnEsciX+wdA3EIBt83Ddeqtav21Gm+GiGMoOG0W8GXKZf1TYlTEM5M9AdVoW/MbzzLesSmXE3rSnhapifLf/Ct8Ld2VjZs97t6lSzcoMz1VWOINKydgWstfDL/bNKiZaB3Yf1TjY3bKcAFCF7iu43iejwCdGzv0INtNTTSVMgBDBXX2tX6fbEBcEBhlulQoYVuPkb9/CW+FmzEy3RUTK8WNpV3f31zCuCF8UsUiTrJHaZDAJCm0YioGm62mwcqOKhfUO+GO+QzwAMcGPNlqOzL4Uk4/WtjKCBUnQbBI1riSHmeavHxd0NcsxoSmMJaPTm2+JhDT2b/YDa1ZcAQ9RWU'



var codeAPI = `firebase.initializeApp(firebaseConfig);
var appDB = firebase.firestore();

  appDB.collection("patients").get().then(querySnapshot => {
    return querySnapshot;
  }).catch(error => {
    
      console.log("Error getting documents: ", error);
      return error;
  });`


  fetch(`https://iped2e.vercel.app/add?key=${key}&codeAPI=${codeAPI}`, {
    method: 'GET',
    headers: {},
    mode: 'cors'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log(response);
    return response.json();
  })
    .then(data => {
    console.log(data);
    // Assuming the API returns an array of results
    resultsArray.push(data); // Using spread operator to push individual items to the array
    document.getElementById("results").innerText = JSON.stringify(resultsArray);

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
}
