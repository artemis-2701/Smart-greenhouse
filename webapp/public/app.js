(function() {
    // Set the configuration for your app
    var config = {
        apiKey: "AIzaSyAOk1FsF1qWcugmDOw_FDoWMcs5tgAN5DY",
    authDomain: "sgh-project-46c52.firebaseapp.com",
    databaseURL: "https://sgh-project-46c52.firebaseio.com",
    projectId: "sgh-project-46c52",
    storageBucket: "sgh-project-46c52.appspot.com",
    messagingSenderId: "1063562845001",
    appId: "1:1063562845001:web:180acb9657f628a761d898",
    measurementId: "G-LQWK8YN73T"
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    // Get element from the DOM
    const sm_1Element = document.getElementById('SoilMoisture_1');
    const sm_2Element = document.getElementById('SoilMoisture_2');
    const lightElement = document.getElementById('Light');
    const tempElement = document.getElementById('Temperature');
    const humElement = document.getElementById('Humidity');


    // Create temperature database reference
    const sm_1Ref = database.ref('DHT11').child('SoilMoisture_1');
    const sm_2Ref = database.ref('DHT11').child('SoilMoisture_2');
    const lightRef = database.ref('DHT11').child('Light');
    const tempRef = database.ref('DHT11').child('Temperature');

    // Create humidity database reference
    const humRef = database.ref('DHT11').child('Humidity');

    // Sync objects changes
    sm_1Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("SoilMoisture_1: " + childData);
            sm_1Element.innerText = childData;
        });
    });
    sm_2Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("SoilMoisture_2: " + childData);
            sm_2Element.innerText = childData;
        });
    });
    lightRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Light: " + childData);
            lightElement.innerText = childData;
        });
    });
    tempRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Temperature: " + childData);
            tempElement.innerText = childData;
        });
    });
    humRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Humidity: " + childData);
            humElement.innerText = childData;
        });
    });

    

}());
