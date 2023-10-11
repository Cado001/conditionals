let firstName = 'Micado'

console.log ((firstName)?
    firstName :  // Console log firstName
    'Who are you?' // Otherwise ask 'who are you'
)

// Using a templated literal
console.log(`Hello${
    firstName ? // If firstName is truthy
        ', ' + firstName : // add their name 
        ', who are you?' // otherwise, don't add anything


}`)

function showData(data){
    console.log((data) ? // If we have data
    data :  // Console log the data
    'Loading...' //Otherwise console log loading
    ) 
}

let ourData = undefined; //our page loads 
showData(ourData)

ourData = ['Apples', 'Orange'] // Our page finishes loading the data
showData(ourData)