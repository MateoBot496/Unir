export default function fetchusers(){

    let users = []
    
    

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => users = json)
      .then(users => {
          const div = document.getElementById('usersDiv')
          div.classList.add("row", "g-3")
          users.forEach(user => {

            //Creanmos col
            const col = document.createElement("div");
            col.classList.add("col-12", "col-md-6", "col-lg-4");

            //Creamos tarjeta dentro de col
            const card = document.createElement("div");
            card.classList.add("card", "p-3", "shadow-sm", "h-100");
            card.innerHTML= `
              <h5 class="card-title">#${user.id} - ${user.name}</h5>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Tel:</strong> ${user.phone}</p>
              <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
              <p><strong>Company:</strong> ${user.company.name}</p>
              <p><strong>City:</strong> ${user.address.city}</p>
            `;
            col.appendChild(card);
            div.appendChild(col)
          })
        }
      )
      .catch(err => console.error(err))
    

    
}