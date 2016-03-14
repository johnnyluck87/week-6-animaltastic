 var animals = ['Cat', 'Dog', 'Pig', 'Sloth'];

   function renderButtons(){ 
       $('#buttonsView').empty();

       for (var i = 0; i < animals.length; i++){
           var a = $('<button>')
           a.addClass('animal');
           a.attr('data-name', animals[i]);
           a.text(animals[i]);
           $('#buttonsView').append(a);
       }
   }

   function displayAnimalInfo(){
       var animal = $(this).attr('data-name');
       var queryURL = 'http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

     $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
             $("#animalView").html(JSON.stringify(response));
       }); 
   }

   renderButtons();

   $('#addAnimal').on('click', function(){

       var movie = $('#animal-input').val().trim();

       animals.push(movie);
       
       renderButtons();

       return false;
   });

   $(document).on('click', '.movie', displayAnimalInfo);

