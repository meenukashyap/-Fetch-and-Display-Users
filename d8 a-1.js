async function fetchuser()
{
    let response=await fetch('https://jsonplaceholder.typicode.com/users')
    let user=await response.json()
    console.log(user)
    let container=document.getElementById('userContainer')
    user.forEach((element,index)=> {
        let userCard=document.createElement('div')
        let h4=document.createElement('h4')
        h4.innerText="Title:"+element.name;
        console.log(element.name)
        let h5=document.createElement('h5')
        h5.innerText=element.username;
        let h6=document.createElement('h6')
        h6.innerText=element.email;
        let b=document.createElement('b')
        b.innerText=element.website;
        userCard.append(h4,h5,h6,b)
        container.appendChild(userCard);

        
    });
}
fetchuser();