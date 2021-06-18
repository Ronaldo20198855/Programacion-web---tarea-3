
const form = document.forms['agregarPersona'];


form.onsubmit = (event) => {
    event.preventDefault();
    console.log(personasJson());
};

function personasJson()
{
    const personas = {}

    Array.from(form.elements).forEach(Element => {
        if(Element.name) personas[Element.name] =  Element.value
    })

    fetch('http://www.raydelto.org/agenda.php',{
    method: 'POST',
    body: JSON.stringify(personas) 

    })
    .then( res => res.json())
    .then(data => {
        console.log(data)
    })
    return personas;
}





/*fetch('http://www.raydelto.org/itla/agenda',{
    method: 'POST',
    body: JSON.stringify(form),
    Headers: {
        "content-type" : "application/json"
    }

})

.then(res => res.json())
.then(data => console.log(data))
*/


