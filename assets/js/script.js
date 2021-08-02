/* Author: 

*/
var start = 0, end = 6;
var abc = document.querySelector('button');
abc.addEventListener('click', function() {loadMore(start, end)});


function loadMore(begin = 0, last = 6) {
    var http = new XMLHttpRequest();
    http.onload = function () {
        var a = JSON.parse(this.responseText);
        console.log(a);
        for (var i = begin; i < last; i++) 
        {
            var title = document.createElement('h4');
            title.textContent = "Title: " + a[i].title;
            console.log(document.getElementById('result'));
            document.getElementById('result').appendChild(title);
           
            var body = document.createElement('p');
            body.textContent = "Body: " + a[i].body;
            document.getElementById('result').appendChild(body);
            
            
            console.log(a[i]);
            
            
            // document.getElementById('result').innerHTML = this.responseText;
        }
        
       
    }
    http.open("GET", "https://jsonplaceholder.typicode.com/posts");
    http.send();
    start += 6;
    end += 6;
    
}
loadMore(start, end);






















