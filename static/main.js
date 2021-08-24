console.log('hello world')
const quizzBox= document.getElementById('quizz-box')
const spinnerBox = document.getElementById('spinner-box')
const loadBtn = document.getElementById('load-btn')
const loadBox = document.getElementById('loading-box')
const answer = document.getElementById('answer')
let visible = 1
let mark1=0
let mark2=0
let mark3=0
let mark4=0
const content = document.getElementById('content')
const startBtn = document.getElementById('start')
const instruction = document.getElementById('ins')
const btndiv = document.getElementById('btn')
const okBtn = document.getElementById('ok')
const cancelBtn = document.getElementById('cancel')
const mark = document.getElementById('mark')

startBtn.addEventListener('click',()=>{
   instruction.style.visibility = "visible"
    
})
okBtn.addEventListener('click',()=>{
    quizzBox.style.visibility = "visible"
    loadBox.style.visibility = "visible"
    instruction.style.visibility = "hidden"
    content.style.visibility = "hidden"

})
cancelBtn.addEventListener('click',()=>{
    instruction.style.visibility = "hidden"
})


const handledata = () =>{
    $.ajax({
        type:'GET',
        url:`/quizz-json/${visible}/`,
        success:function(response){
            console.log(response.max)
            console.log(response.data)
            console.log(response.quizz_size)
            max_size = response.max
            const data = response.data
            
            data.map(post=>{
                console.log(post.id)
               
                quizzBox.innerHTML = `<div class="card p-1 mt-1 mt-1">
                                        <h1>${post.question}</h1> 
                                        <p id="option1">${post.option1}</p> 
                                        <p id="option2">${post.option2}</p> 
                                        <p id="option3">${post.option3}</p> 
                                        <p id="option4">${post.option4}</p> 
                                        <h2 id="ans">${post.answer}</h2>
                                        </div>`
                 
                
                                        
            })
            
            let clicked = true
            
            
            
            $("#option1").click(function(){
                if (clicked == true) {
                    
                    opt1 = option1.innerHTML
                    console.log(opt1)
                    let ans = document.getElementById('ans').innerHTML
                    console.log(ans)
                    console.log(opt1) 
                    if (opt1 == ans ) {
                        $("#option1").css("background-color" , "green")
                        $("#option1").css("color","white")
                        mark1 += 1
                        console.log(mark1)
                        clicked=false
                        
                    }
                    else{
                        $("#option1").css("background-color","red")
                        $("#option1").css("color","white")
                        mark1 += 0
                        clicked = false
                    }
                   
                    
                }
                else{
                    console.log('other option clicked')
                }
                
            })
            $("#option2").click(function(){
                if (clicked == true) {
                    
                    opt2 = option2.innerHTML
                    console.log(opt2)
                    let ans = document.getElementById('ans').innerHTML
                    console.log(ans)
                    if (opt2 == ans) {
                        $("#option2").css("background-color","green")
                        $("#option2").css("color","white")
                        mark2 += 1
                        console.log(mark2)
                        clicked=false
                        
                        
                    }
                    else{
                        $("#option2").css("background-color","red")
                        $("#option2").css("color","white")
                        mark2 += 0
                        clicked = false
                    }
                    
                    
                }
                else{
                    console.log('other option clicked')
                }
               
            })
            $("#option3").click(function(){
                
                if (clicked == true) {
                    opt3 = option3.innerHTML
                    console.log(opt3)
                    let ans = document.getElementById('ans').innerHTML
                    console.log(ans)
                    if (opt3 == ans) {
                        $("#option3").css("background-color","green")
                        $("#option3").css("color","white")
                        mark3 += 1
                        console.log(mark3)
                        clicked=false
                    }
                    else{
                        $("#option3").css("background-color","red")
                        $("#option3").css("color","white")
                        mark3 += 0
                        clicked = false
                    }
                   
                    
                    
                }
                else{
                    console.log('other option clicked')
                }
                
            })
            $("#option4").click(function(){
                
                if (clicked == true) {
                    opt4 = option4.innerHTML
                    console.log(opt4)
                    let ans = document.getElementById('ans').innerHTML
                    console.log(ans)
                    if (opt4 == ans) {
                        $("#option4").css("background-color","green")
                        $("#option4").css("color","white")
                        mark4 += 1
                        console.log(mark4)
                        clicked=false
                    }
                    else{
                        $("#option4").css("background-color","red")
                        $("#option4").css("color","white")
                        mark4 += 0
                        clicked = false
                    }
                    
                    
                    
                }
                else{
                    console.log('other option clicked')
                }
                
            })

           
               

            

           
            
            

            
            
            if(max_size){
                console.log('done')
                console.log(max_size)
                loadBox.innerHTML = `<button id="submit"> submit </button>` 
                let submit = document.getElementById("submit")
                submit.addEventListener('click',()=>{
                    let get_mark = mark1 + mark2 + mark3 + mark4 
                  
                    let total_mark = visible
                    console.log(total_mark)
                    let precentage = (get_mark*100)/total_mark
                    quizzBox.style.display = "none"
                    loadBox.style.display = "none"
                    console.log(total_mark)
                    mark.innerHTML = "your mark is "+ precentage
                    answer.style.visibility="visible"
                                            
                    
                })
            }
            
        },
        error: function(error){
            console.log(error)
        }
    })
}

handledata()




loadBtn.addEventListener('click',()=>{
    visible +=1;
    handledata()
})
