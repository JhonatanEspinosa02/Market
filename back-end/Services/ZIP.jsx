export default function ZIP(){
    const ENDPOINT = 'https://api.tau.com.mx/dipomex/v1/codigo_postal'
    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data)=> console.log(data.map(()=> console.log(data))))
}