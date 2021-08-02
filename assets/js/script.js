/* Author: 

*/
var start = 0, end = 6;
var load = document.querySelector('button');
load.addEventListener('click', loadMore(start + 6, end + 6));


function loadMore(start = 0, end = 6) {
    var http = new XMLHttpRequest();
    
    http.onload = function () {
        var a = JSON.parse(this.responseText);
        for (var i = start; i < end; i++) 
        {
            var title = document.createElement('h4');
            title.textContent = "Title: ";
            var body = document.createElement('p');
            body.textContent = "Body: ";
            document.querySelector('div').appendChild(title);
            document.querySelector('div').appendChild(body);

        

            console.log(a[i]);
            
            
            // document.getElementById('result').innerHTML = this.responseText;
        }
        
       
    }
    http.open("GET", "https://jsonplaceholder.typicode.com/posts");
    http.send();
    
}






















