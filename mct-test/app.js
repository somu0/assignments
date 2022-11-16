const searchuser = (e) =>{
    e.preventDefault();
    var search = document.getElementById("search").value;
 
 fetch("https://domainr.p.rapidapi.com/v2/register" + search)
   .then((result) => result.json(), function (err) {
         console.log('err');
       })
   .then((data) => {
     document.getElementById(
       "result"
     ).innerHTML = ` <a target="_blank" href="https://domainr.p.rapidapi.com/v2/register${search}"> <img src=${data.avatar_url} alt="No user found"/> <a/> `;
   })
   .catch(console.log("wrong"));
 }
 
 let form= document.getElementById("myForm");
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '328b6ef3bfmsh88abf7688667e50p147846jsn83362d5ae826',
		'X-RapidAPI-Host': 'domainr.p.rapidapi.com'
	}
};

fetch('https://domainr.p.rapidapi.com/v2/register?mashape-key=undefined&domain=example.com&registrar=namecheap.com', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
