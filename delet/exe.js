document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ce373d5341msh8fb7accbaa2a8b5p1f3c29jsn1f4c835f91a1',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }; 
    
    let nydata = document.getElementById("data")

    const btn = document.getElementById("btn");

    btn.addEventListener('click', mydata);

    async function mydata() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.results);
            nydata.innerHTML = result;
        } catch (error) {
            console.error(error);
        }
    }
});
