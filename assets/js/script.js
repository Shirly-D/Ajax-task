/* Author: 

*/
var start = 0, end = 6;
var abc = document.querySelector('button');
abc.addEventListener('click', function () { loadMore(start, end) });


function loadMore(begin = 0, last = 6) {
    var http = new XMLHttpRequest();
    http.onload = function () 
    {
        console.log(last);
        var a = JSON.parse(this.responseText);
        for (var i = begin; i < last; i++) {
            if (i <= a.length -1)
            {
                var title = document.createElement('h4');
                title.textContent = "Title: " + a[i].title;
                console.log(document.getElementById('result'));
                document.getElementById('result').appendChild(title);

                var body = document.createElement('p');
                body.textContent = "Body: " + a[i].body;
                document.getElementById('result').appendChild(body);
            }

            if (i == a.length - 1) 
            {
                document.querySelector('button').style.display = "none";
            }
            console.log(a[i]);
        }


    }
    http.open("GET", "https://jsonplaceholder.typicode.com/posts");
    http.send();
    start += 6;
    end += 6;

}
loadMore(start, end);






















