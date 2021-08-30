const doc = document
doc.onload = addEventListener('click',(e) => e.preventDefault())


$('.enter').click(function(){
    let user = $('.user').val()
    let pass = $('.pass').val()
    let field = doc.querySelector('.invalid-fields')
    let data    = doc.querySelector('.invalid-data')
    let server  = doc.querySelector('.invalid-server')

    let url = 'http://localhost:3004/auth'

    let config = {
        method:'GET'
    }

    if(user == '' || pass == ''){
        field.style.display = 'block'
    }else{
        fetch(url,config)
                .then(auth => auth.json())
                .then(auth => {
                    auth.map(e =>{
                        if( user == e.user
                            &&
                            pass == e.password){
                            doc.location.href = 'home/index.html'
                            storage(user,pass)
                            clear()
                        }else if(user != e.user
                            &&
                            pass != e.password){
                            data.style.display = 'block' 
                            clear() 
                        }
                    })
                })
                .catch(_=>{
                    server.style.display  = 'block'
                })
    }

})


function hidden_alert(){
    let user  = $('.user')
    let pass  = $('.pass')
    let field   = doc.querySelector('.invalid-fields')
    let data    = doc.querySelector('.invalid-data')
    let server  = doc.querySelector('.invalid-server')

    user.mouseenter(function(){
        field.style.display   = 'none'
        data.style.display    = 'none'
        server.style.display  = 'none'
    })
    pass.mouseenter(function(){
        field.style.display   = 'none'
        data.style.display    = 'none'
        server.style.display  = 'none'
    })
}
hidden_alert()


function clear(){
    let user  = doc.querySelector('.user')
    let pass  = doc.querySelector('.pass')

    user.value = ''
    pass.value = ''
}


function storage(USER,PASSWORD){
    localStorage.setItem('_USER',USER)
    localStorage.setItem('_PASSWORD',PASSWORD)    
}
