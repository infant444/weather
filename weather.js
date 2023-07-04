
async function chck(){
    const x="ac2d0d3c6d5ee79d17f8279658814fec";
    const y="https://api.openweathermap.org/data/2.5/weather?unit=matric&q=";
    const z=await fetch(y+document.getElementById('loc').value+`&appid=`+x);
    if(z.status=="404")
    {
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
    }
    else
    {
    var data=await z.json();
    console.log(data);
    var a=Math.round(parseFloat(data.main.temp)-273.15)+" <sup>o</sup>C";
    document.querySelector(".city").innerHTML=data.name+","+data.sys.country;
    document.querySelector(".temp").innerHTML=a;
    document.querySelector(".win").innerHTML=data.wind.speed+" km/h";
    document.querySelector(".hu").innerHTML=data.main.humidity+" %";
    var i=document.querySelector(".wic");
    if(data.weather[0].main=="Clouds")
    {
        i.src="./img/clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        i.src="./img/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        i.src="./img/rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        i.src="./img/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        i.src="./img/mist.png";
    }
    document.querySelector('.error').style.display="none";

    document.querySelector('.weather').style.display="block";
}

}