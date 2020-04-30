// REPLACE <...> BY YOUR FIREBASE PROJECT CONFIGURATION:
const config = {
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


// Number of last elements to work with, in the 'timestamped_measures' node of the database: 
const nbOfElts = 50;

firebase.database().ref('/DHT11/time_soil_1').limitToLast(nbOfElts).on('value', ts_measures => {
    
    let timestamps = [];
    let values = [];
    
    ts_measures.forEach(ts_measure => {
        //console.log(ts_measure.val().timestamp, ts_measure.val().value);
        timestamps.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        values.push(ts_measure.val().value);
    });

    myPlotDiv = document.getElementById('myPlot');

    const data = [{
        x: timestamps,
        y: values
    }];

    const layout = {
        title: ' Soil Moisture 1 live plot ',
        titlefont: {
            family: 'Comic Sans MS, monospace',
            size: 25,
            color: '#000'
        },
        xaxis: {
            linecolor: 'black',
            linewidth: 4
        },
        yaxis: {
            title: '<b>per cm3</b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
            linecolor: 'black',
            linewidth: 4,
        },
        margin: {
            r: 50,
            pad: 0
        }
    }
    // At last we plot data :-)
    Plotly.newPlot(myPlotDiv, data, layout, { responsive: true });
});

firebase.database().ref('/DHT11/time_soil_2').limitToLast(nbOfElts).on('value', ts_measures => {
    
    let timestamps = [];
    let values = [];
    
    ts_measures.forEach(ts_measure => {
        //console.log(ts_measure.val().timestamp, ts_measure.val().value);
        timestamps.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        values.push(ts_measure.val().value);
    });



    myPlotDiv = document.getElementById('myPlot1');

    const data = [{
        x: timestamps,
        y: values
    }];

    const layout = {
        title: 'Soil Moisture 2 live plot',
        titlefont: {
            family: 'Comic Sans MS, monospace',
            size: 25,
            color: '#000'
        },
        xaxis: {
            linecolor: 'black',
            linewidth: 4
        },
        yaxis: {
            title: '<b>per cm3</b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
            linecolor: 'black',
            linewidth: 4,
        },
        margin: {
            r: 50,
            pad: 0
        }
    }
    // At last we plot data :-)
    Plotly.newPlot(myPlotDiv, data, layout, { responsive: true });
});


firebase.database().ref('/DHT11/time_Humidity').limitToLast(nbOfElts).on('value', ts_measures => {
    
    let timestamps = [];
    let values = [];
    
    ts_measures.forEach(ts_measure => {
        //console.log(ts_measure.val().timestamp, ts_measure.val().value);
        timestamps.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        values.push(ts_measure.val().value);
    });

    myPlotDiv = document.getElementById('myPlot2');

    const data = [{
        x: timestamps,
        y: values
    }];

    const layout = {
        title: 'Humidity live plot',
        titlefont: {
            family: 'Comic Sans MS, monospace',
            size: 25,
            color: '#000'
        },
        xaxis: {
            linecolor: 'black',
            linewidth: 4
        },
        yaxis: {
            title: '<b>percentage(%)</b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
            linecolor: 'black',
            linewidth: 4,
        },
        margin: {
            r: 50,
            pad: 0
        }
    }
    // At last we plot data :-)
    Plotly.newPlot(myPlotDiv, data, layout, { responsive: true });
});


firebase.database().ref('/DHT11/time_Temp').limitToLast(nbOfElts).on('value', ts_measures => {
    
    let timestamps = [];
    let values = [];
    
    ts_measures.forEach(ts_measure => {
        //console.log(ts_measure.val().timestamp, ts_measure.val().value);
        timestamps.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        values.push(ts_measure.val().value);
    });

    myPlotDiv = document.getElementById('myPlot3');

    const data = [{
        x: timestamps,
        y: values
    }];

    const layout = {
        title: 'Temperature live plot',
        titlefont: {
            family: 'Comic Sans MS, monospace',
            size: 25,
            color: '#000'
        },
        xaxis: {
            linecolor: 'black',
            linewidth: 4
        },
        yaxis: {
            title: '<b> degree celcius (°C) </b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
            linecolor: 'black',
            linewidth: 4,
        },
        margin: {
            r: 50,
            pad: 0
        }
    }
    // At last we plot data :-)
    Plotly.newPlot(myPlotDiv, data, layout, { responsive: true });
});

firebase.database().ref('/DHT11/time_light').limitToLast(nbOfElts).on('value', ts_measures => {
    
    let timestamps = [];
    let values = [];
    
    ts_measures.forEach(ts_measure => {
        //console.log(ts_measure.val().timestamp, ts_measure.val().value);
        timestamps.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        values.push(ts_measure.val().value);
    });

    myPlotDiv = document.getElementById('myPlot4');

    const data = [{
        x: timestamps,
        y: values
    }];

    const layout = {
        title: 'Light Intensity live plot',
        titlefont: {
            family: 'Comic Sans MS, monospace',
            size: 25,
            color: '#000'
        },
        xaxis: {
            linecolor: 'black',
            linewidth: 4
        },
        yaxis: {
            title: '<b>luminosity (lux)</b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
            linecolor: 'black',
            linewidth: 4,
        },
        margin: {
            r: 50,
            pad: 0
        }
    }
    // At last we plot data :-)
    Plotly.newPlot(myPlotDiv, data, layout, { responsive: true });
});

$(document).ready(function(){
    var database = firebase.database();
    var ledStatus;
    database.ref().on("value", function(snap){
        ledStatus = snap.val().ledStatus;
        if(ledStatus == 1){
        $(".lightStatus").text("On");
        }
        else{
            $(".lightStatus").text("Off");   
        }
    
    });

    $(".lightButton").click(function(){
        var firebaseRef = firebase.database().ref().child("ledStatus");

        if(ledStatus == 1){
            firebaseRef.set(0);
            ledStatus = 0;
        }
        else{
            firebaseRef.set(1);
            ledStatus = 1;
        }
    });

});

$(document).ready(function(){
    var database = firebase.database();
    var fanStatus;
    database.ref().on("value", function(snap){
        fanStatus = snap.val().fanStatus;
        if(fanStatus == 1){
        $(".fanStatus").text("On");
        }
        else{
            $(".fanStatus").text("Off");   
        }
    
    });

    $(".fanButton").click(function(){
        var firebaseRef = firebase.database().ref().child("fanStatus");

        if(fanStatus == 1){
            firebaseRef.set(0);
            fanStatus = 0;
        }
        else{
            firebaseRef.set(1);
            fanStatus = 1;
        }
    });

});
