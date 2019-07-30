$(document).ready(function (){
 // Initial array of movies
 var movies = ["Ferrari", "Porsche", "Corvette", "GTR"];    
 //    global variables
    let $input = $('#input');

    let $submit = $('#submit');



    // /   get value when user clicks on submit button
    $submit.on('click', function () {
        // prevents from clearing out after hitting submit
        event.preventDefault();
        var inputVal = $input.val();
        // grabs value when entered in input
        console.log(inputVal);

    });



 // displayMovieInfo function re-renders the HTML to display the appropriate content
 function displayMovieInfo() {

   var inputVal = $(this).attr("data-name");
   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +inputVal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

   // Creating an AJAX call for the specific movie button being clicked
   $.ajax({
       url: queryURL,
       method: "GET"
   })
   .then(function(response){   
       console.log(response.data);     
       let results = response.data;          
       for (var i = 0; i < results.length; i++) {               
           if (results[i].rating!== "r" && results[i].rating!=="pg-13"){
               let gifDiv = $('<div>');
               let rating = results[i].rating;
               let p = $('<p>').text('Rating ' + rating);
               let personImage = $('<img>');
             
               personImage.attr('src', results[i].images.fixed_height.url);

               gifDiv.append(p);
               gifDiv.append(personImage);

               $('#gifs-appear-here').prepend(gifDiv);

           }
       }
   })}
   

 // Function for displaying movie data
 function renderButtons() {

   // Deleting the movies prior to adding new movies
   // (this is necessary otherwise you will have repeat buttons)
   $("#buttons-view").empty();

   // Looping through the array of movies
   for (var i = 0; i < movies.length; i++) {

     // Then dynamicaly generating buttons for each movie in the array
     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
     var a = $("<button>");
     // Adding a class of movie-btn to our button
     a.addClass("movie-btn");
     // Adding a data-attribute
     a.attr("data-name", movies[i]);
     // Providing the initial button text
     a.text(movies[i]);
     // Adding the button to the buttons-view div
     $("#buttons-view").append(a);
   }
 }

 // This function handles events where a movie button is clicked
 $("#add-movie").on("click", function(event) {
   event.preventDefault();
   // This line grabs the input from the textbox
   var movie = $("#movie-input").val().trim();

   // Adding movie from the textbox to our array
   movies.push(movie);

   // Calling renderButtons which handles the processing of our movie array
   renderButtons();
 });

 // Adding a click event listener to all elements with a class of "movie-btn"
 $(document).on("click", ".movie-btn", displayMovieInfo);

 // Calling the renderButtons function to display the intial buttons
 renderButtons();
    
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