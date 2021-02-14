
//POST REQUEST

$(document).ready(function(){
    $('#postMessage').click(function(e){
        e.preventDefault();
        // alert("hi");
        //serialize form data

        $.fn.serializeAndEncode = function() {
            return $.map(this.serializeArray(), function(val) {
                return [val.name, decodeURIComponent(val.value)].join('=');
            }).join('&');
        };
        var url = $('form').serializeAndEncode().replace(/\+/g,' ');
        // var url = $('form').serialize();
        // var url = $('form').serialize();

        //function to turn url to an object
        function getUrlVars(url) {
            var hash;
            var myJson = {};
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                console.log(hash)
                myJson[hash[0]] = hash[1];
            }
            console.log(myJson);
            return JSON.stringify(myJson);
        }

        console.log(url);
        // //pass serialized data to function
        var test = getUrlVars(url);

        //post with ajax
        $.ajax({
            type:"POST",
            // url: "Work folders/OOP php/RESTFUL traversy/php_rest_myblog/api/post/create.php",
            // url: "/project_crio/Backend/php_rest_myblog/api/post/create.php",
            url: "/crio-xmeme/create.php",
            // url: "http:://127.0.0.1:8000/php_rest_myblog/api/post/create.php",
            data: test,
            ContentType:"application/json",

            success:function(){
                alert('successfully posted');
            },
            error:function(){
                alert('Could not be posted');
            }

        });
    });
});
    

//GET REQUEST

  document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
       
       var req;
       req=new XMLHttpRequest();
    //    req.open("GET", '/Work folders/OOP php/RESTFUL traversy/php_rest_myblog/api/post/read.php',true);
       req.open("GET", '/crio-xmeme/read.php',true);
       req.send();
      
       req.onload=function(){
       var json=JSON.parse(req.responseText.trim());

       console.log('wpw');
        console.log(json[0].id);
        var last_id = json[0].id;

       //limit data called
       var son = json.filter(function(val) {
                console.log(val.id);
              return (val.id >= (last_id - 99) );  
          });

      var html = "";

      //loop and display data
      son.forEach(function(val) {
          var keys = Object.keys(val);

          console.log(val);
          
          html += "<div class = 'cat'>";
              keys.forEach(function(key) {
                  if(key == 'name'){
                    // html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
                    html += "<strong>" + val[key] + "</strong> " + "<br>";
                  }else if(key == 'url'){
                    html += " <img height='300px' width='300px' src=' " + val[key] 
                        + " ' " + "onerror=if (this.src != 'error.jpg') this.src = 'error.jpg'; " + "alt='meme' /> <br>";
                  }else if(key == 'caption'){
                    // html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
                    html += "<i>" + val[key] + "</i> " + "<br>";
                  }
              
              });
          html += "</div><br>";
      });

      //append in message class
      document.getElementsByClassName('message')[0].innerHTML=html;         
      };
    };
  });
  
