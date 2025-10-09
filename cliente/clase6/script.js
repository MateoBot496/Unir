async function getUsers(){
    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!usuarios.ok) throw new Error('Error en la petición');
    const data = await usuarios.json();
    data.forEach(u => {
        console.log(u.name);
    }); 
}

getUsers();