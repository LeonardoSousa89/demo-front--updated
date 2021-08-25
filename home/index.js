const doc  = document
doc.onload = addEventListener('click',(e)=>e.preventDefault())
doc.onload = addEventListener('load',()=>{
    $('.lgt').hide()
    $('.adm').hide()
    $('.tb_search').hide()
    load_table()
})


$('#tog').click(function(){
    $('.lgt').toggle(100)
    $('.adm').toggle(100)
})


$('.lgt').click(function(){
    doc.location.href = '../index.html'
})


$('.adm').click(function(){
    doc.location.href = '../admin/index.html'
})


$('#lgt').click(function(){
    doc.location.href = '../index.html'
})


$('#adm').click(function(){
    doc.location.href = '../admin/index.html'
})


$('#git').click(function(){
    doc.location.href = 'https://github.com/LeonardoMendes89'
})


$('#linkedin').click(function(){
    doc.location.href = 'https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173'
})


$('#facebook').click(function(){
    doc.location.href = 'https://www.facebook.com/profile.php?id=100039697203669'
})


$('#twitter').click(function(){
    doc.location.href = 'https://twitter.com/LeoSant97854129'
})


$('#instagram').click(function(){
    doc.location.href = 'https://www.instagram.com/torre.digital77/'
})


$('#site').click(function(){
    doc.location.href = 'https://leoprofessionallog.wixsite.com/mysite'
})


function load_table(){
    const id_area       = doc.getElementById('id')
    const name_area     = doc.getElementById('name')
    const job_area      = doc.getElementById('job')
    const sector_area   = doc.getElementById('sector')
    const salary_area   = doc.getElementById('salary')


   const url = 'http://localhost:3003'

   const config = {
       method:'GET'
   }

   fetch(url, config)
                .then(people => people.json())
                .then(people => {
                    people.map(e=>{
                        let id   = e.id
                        create_data(id_area,id,'ul')

                        let name = e.name.substring(0,15)
                        create_data(name_area,name,'ul')

                        let job = e.job.substring(0,15)
                        create_data(job_area,job,'ul')

                        let sector = e.sector.substring(0,15)
                        create_data(sector_area,sector,'ul')

                        let salary = e.salary + '$'
                        create_data(salary_area,salary,'ul')
                    })
                })
                .catch()
}


function search_table(){
    let search = document.getElementById('search')
   
    search.onkeyup  = addEventListener('keyup',()=>{
       
        if(search.value == ''){
            doc.location.reload()
        }else{
            $('.tb_search').show()
            $('.tb').hide()

            const id_area       = doc.getElementById('idsc')
            const name_area     = doc.getElementById('namesc')
            const job_area      = doc.getElementById('jobsc')
            const sector_area   = doc.getElementById('sectorsc')
            const salary_area   = doc.getElementById('salarysc')
        
        
           const url = `http://localhost:3003/search/name/${search.value}`
        
           const config = {
               method:'GET'
           }
        
           fetch(url, config)
                    .then(search => search.json())
                    .then(search =>{
                        search.filter(e=>{
                                let id = e.id 
                                create_data(id_area,id,'ul')
    
                                let name = e.name.substring(0,15) 
                                create_data(name_area,name,'ul')
    
                                let job = e.job.substring(0,15) 
                                create_data(job_area,job,'ul')
    
                                let sector = e.sector.substring(0,15) 
                                create_data(sector_area,sector,'ul')
    
                                let salary = e.salary + '$' 
                                create_data(salary_area,salary,'ul')
                        })
                    })
                    .catch(err => console.log(err))
        }
    })
}
search_table()


function create_data(positioned,element,createObject){
    let object = doc.createElement(`${createObject}`)
    object.innerHTML = element
    positioned.insertAdjacentElement('afterbegin',object)
}

