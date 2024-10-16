async function read(url,options){
    let response = await fetch(url,options);
    let data = await response.json();
    console.log(data);
}
const url = "http://localhost:5000/details";
let options = {
    "method":"get",
    // "header":{
    //     "content-Type": "application/json"
    // },
    // "body":JSON.stringify({
    //     "name":"sri kanth",
    //     "age":22,
    //     "dod":"NO idea"
    // })
}
read(url,options);