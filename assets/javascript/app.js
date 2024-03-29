$(document).ready(function () {
    // Initial array of cars
    var cars = ["Ferrari", "Porsche", "Corvette", "GTR"];
    //    global variables
    let $input = $('#input');

    let $submit = $('#submit');



    $submit.on('click', function () {
        // prevents from clearing out after hitting submit
        event.preventDefault();
        var inputVal = $input.val();
        // grabs value when entered in input
        console.log(inputVal);



    });



    function displayInfo() {

        var inputVal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + inputVal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response.data);
                let results = response.data;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        let gifDiv = $("<div>");
                        let rating = results[i].rating;
                        let p = $('<p>').text('Rating ' + rating);
                        let carImage = $('<img>');
                        let defaultAnimate = results[i].images.fixed_height.url;
                        let statisSrc = results[i].images.fixed_height_still.url;


                        carImage.attr('src', results[i].images.fixed_height.url);
                        carImage.addClass("carGif")
                        carImage.attr('data-state', "still");
                        carImage.attr('data-still', statisSrc);
                        carImage.attr('data-animate', defaultAnimate);
                        gifDiv.append(p);
                        gifDiv.append(carImage);

                        $('#gifs-appear-here').prepend(gifDiv);

                    }
                }
            })
    }



    function renderButtons() {


        $("#buttons-view").empty();

        // Looping through the array of cars
        for (var i = 0; i < cars.length; i++) {

            var a = $("<button>");

            a.addClass("car-btn");

            a.attr("data-name", cars[i]);

            a.text(cars[i]);

            $("#buttons-view").append(a);
        }
    }

    // This function handles events where a car button is clicked
    $("#add-cars").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var car = $("#car-input").val().trim();

        // Adding car from the textbox to our array
        cars.push(car);

        // Calling renderButtons which handles the processing of our car array
        renderButtons();
    });

    // Adding a click event listener to all elements with a class of "car-btn"
    $(document).on("click", ".car-btn", displayInfo);
    // $(document).on("click", "#add-cars", displayInfo);
    //    displays btns clicked
    renderButtons();



    // new code added for stills//
    $(document).on('click', ".carGif", playPause);
    function playPause() {
        let state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }
    }
    // end of new code added for still//


    // end of working code
});

















// function getData() {
//     event.preventDefault();
//     var input = $("#input").val()

//     var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=zyqGw9p9fMgfPCglVGVD9Ge4sxcBjolJ&limit=5");

//     xhr.done(function (response) { 
//          console.log("success got data", response);

//     var gifs = response.data

//     for (i in gifs) 
//     {
//     $('#gifs-appear-here').append("<img src='"+gifs[i],images.original.url+"' style='height:50px; width:30px;'/>")
//     }

//         });

//     }












// working code set (adds user input but not data)
// $(document).ready(function () {
//     // global variables
//     let $input = $('#input');

//     let $submit = $('#submit');



//     // /   get value when user clicks on submit button
//     $submit.on('click', function () {
//         // prevents from clearing out after hitting submit
//         event.preventDefault();
//         var inputVal = $input.val();
//         // grabs value when entered in input
//         console.log(inputVal);


//         // make a request to the gif api
//         // var gif = $(this).attr("data-gif");
//     // let apiKey = 'BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9';
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + inputVal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .then(function(response){   
//             console.log(response.data);     
//             let results = response.data;          
//             for (var i = 0; i < results.length; i++) {               
//                 if (results[i].rating!== "r" && results[i].rating!=="pg-13"){
//                     let gifDiv = $('<div>');
//                     let rating = results[i].rating;
//                     let p = $('<p>').text('Rating ' + rating);
//                     let personImage = $('<img>');

//                     personImage.attr('src', results[i].images.fixed_height.url);

//                     gifDiv.append(p);
//                     gifDiv.append(personImage);

//                     $('#gifs-appear-here').prepend(gifDiv);

//                 }
//             }
//         })


//     });



//     //     // end of working code (adds typed input but not data)
// });



 // function getGifs(inputVal) {
        //     $.get('https://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key' + apiKey + '&limit=10')
        //         .done(function (data) {
        //             console.log(data);
        //         });
        // };




// one code set

    //     // Constructing a URL to search Giphy for the name of the person who said the quote
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //       superHero + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

    //     // Performing our AJAX GET request
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     })
    //       // After the data comes back from the API
    //       .then(function(response) {
    //         // Storing an array of results in the results variable
    //         var results = response.data;

    //         // Looping over every result item
    //         for (var i = 0; i < results.length; i++) {

    //           // Only taking action if the photo has an appropriate rating
    //           if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    //             // Creating a div for the gif
    //             var gifDiv = $("<div>");

    //             // Storing the result item's rating
    //             var rating = results[i].rating;

    //             // Creating a paragraph tag with the result item's rating
    //             var p = $("<p>").text("Rating: " + rating);

    //             // Creating an image tag
    //             var personImage = $("<img>");

    //             // Giving the image tag an src attribute of a proprty pulled off the
    //             // result item
    //             personImage.attr("src", results[i].images.fixed_height.url);

    //             // Appending the paragraph and personImage we created to the "gifDiv" div we created
    //             gifDiv.append(p);
    //             gifDiv.append(personImage);

    //             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
    //             $("#gifs-appear-here").prepend(gifDiv);
    //           }
    //         }
    //       });
    //   });




    // end of code



// second code set
    //   get value when user clicks on submit button
    // $submit.on('click', function (event) {
    //     // prevents from clearing out after hitting submit
    //     event.preventDefault();
    //     var inputVal = $input.val();
    //     // grabs value when entered in input
    //     getGifs(inputVal);

    // });
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=MXy1aLgT1HbaNX03iVrsmOVfBneXee0&limit=5");
    // xhr.done(function (data) { console.log("success got data", data); });

    // make a request to the gif api
    // function getGifs(inputVal) {
    //     $.get('https://api.giphy.com/v1/gifs/search?q='+inputVal+'&api_key'+apiKey+'&limit=10')
    //         .done(function (data) {
    //             console.log(data);
    //         });
    // 