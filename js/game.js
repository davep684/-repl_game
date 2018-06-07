//select elements and create variables
var main = document.querySelector(".main")
var L1 = document.querySelector(".L1")
var L1A1 = document.querySelector(".L1A1")
var L1A2 = document.querySelector(".L1A2")
var L1A3 = document.querySelector(".L1A3")

var player = {
  life:100,
}

var questions = {
  L2Q1: "your walking towards the rides and see a fun rollercoaster but theres 4 zombies what do u do ??",
  L2Q2:"you see a rollercoaster but theres flesh eating zombies there do you ",
  L2Q3: "you see a group of live people do you",
  L3Q1: "you rode the ride but a zombie eat one of your arms so your at 75% life do you ?",
  L3Q2: "your hiding in a hanted house but see 10 zombies walking towards you do you ?",
  L3Q3: "you join them and become a bigger group but they seem odd do you",
  L4Q1: "you are safe and see the exit 100 yards away but there is 10 hungry zombies do you ?",
  L4Q2: "you fought ur way out you are alive good job",
}
var buttons = {
  L2A1: ["ride the ride","keep walking","walk towards the middle of the park"],
  L2A2: ["hide","run for your life","hide"],
  L2A3: ["join the fun and ride","fight,keep walking"],
  L3A1: ["run and hide","run for your life ","eat"],
  L3A2: ["find the exit","look for help","exit"],
  L3A3: ["look fo some fun"],
  
}


//define functions
function addQuestion(level, question, buttons){
  main.innerHTML += 
  `
  <div class="level ${level}">
    <p class="${level}Q1">
      ${question}
    </p>
  `
  buttons.forEach(function(button, index){
    main.innerHTML += 
    `
      <button class="${level}A${index+1}">${button}</button>
    `
  })
}

function addEvents(elem, eve, callback){
  elem.addEventListener(eve, function(event){
    main.innerHTML = ""
    callback(event.target.classList[0])
  })
}

function l1answrs(selected){
  if(selected === "L1A1"){
    console.log(selected)
    player.score += 20
    addQuestion("L2", questions.L2Q1, [buttons.L2A1[0], buttons.L2A2[0]])
    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    addEvents(L2A1, "click", l2answrsScen1)
    addEvents(L2A2, "click", l2answrsScen1)
    return
  }
  if(selected === "L1A2"){
    addQuestion("L2", questions.L2Q2, [buttons.L2A1[1], buttons.L2A2[1]])
    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    addEvents(L2A1, "click", l2answrsScen2)
    addEvents(L2A2, "click", l2answrsScen2)
    return
  }
  if(selected === "L1A3"){
    addQuestion("L2", questions.L2QA3, [buttons.L2A1[2], buttons.L2A2[2], buttons.L2A3[0]])
    var L2A1 = document.querySelector(".L2A1")
    var L2A2 = document.querySelector(".L2A2")
    var L2A3 = document.querySelector(".L2A3")
    addEvents(L2A1, "click", l2answrsScen3)
    addEvents(L2A2, "click", l2answrsScen3)
    addEvents(L2A3, "click", l2answrsScen3)
    return 
  }
}

function l2answrsScen1(selected){
  if(selected === "L2A1"){
    console.log(selected)
    addQuestion("L3", questions.L3Q1, [buttons.L3A1[0], buttons.L3A2[0]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen1)
    addEvents(L3A2, "click", l3answersScen1)
    return
  }
  if(selected === "L2A2"){
    console.log(selected)
    addQuestion("L3", questions.L3Q2, [buttons.L3A1[1], buttons.L3A2[1]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen2)
    addEvents(L3A2, "click", l3answersScen2)
    return
  }
}

function l2answrsScen2(selected){
  if(selected === "L2A1"){
    console.log(selected)
    addQuestion("L3", questions.L3Q3, [buttons.L3A1[2], buttons.L3A2[2]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen3)
    addEvents(L3A2, "click", l3answersScen3)
    return
  }
  if(selected === "L2A2"){
    console.log(selected)
    addQuestion("L3", question.L3Q1, [buttons.L3A1[3], buttons.L3A2[3]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen4)
    addEvents(L3A2, "click", l3answersScen4)
    return
  }
}

function l2answrsScen3(selected){
  if(selected === "L2A1"){
    console.log(selected)
    addQuestion("L3", questions.L3Q4, [buttons.L3A1[4], buttons.L3A2[3]])
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    addEvents(L3A1, "click", l3answersScen5)
    addEvents(L3A2, "click", l3answersScen5)
    return
  }
  if(selected === "L2A2"){
    console.log(selected)
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q1">
          find an exit your still alive 
        </p>
        <button class="L3A1">find the exit </button>
        <button class="L3A2">go back towards the entrence</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    L3A1.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
  if(selected === "L2A3"){
    console.log(selected)
    main.innerHTML += 
    `
      <div class="level L3">
        <p class="L3Q1">
          you are alive and good the zombies are not bothering you but you want to leave 
        </p>
        <button class="L3A1">find the exit </button>
        <button class="L3A2">run and go away</button>
        <button class="L3A3">hide</button>
      </div>
    `
    var L3A1 = document.querySelector(".L3A1")
    var L3A2 = document.querySelector(".L3A2")
    var L3A3 = document.querySelector(".L3A3")
    L3A1.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A2.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L3A3.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
}

function l3answersScen1(selected){
  if(selected==="L3A1"){
    console.log(selected)
    main.innerHTML += 
    `
      <div class="level L4">
        <p class="L4Q1">
          find help look for people 
        </p>
        <button class="L4A1">Hide in the park</button>
        <button class="L4A2">look look </button>
        <button class="L4A3">hide somewhere where u can be safe</button>
      </div>
    `
    var L4A1 = document.querySelector(".L4A1")
    var L4A2 = document.querySelector(".L4A2")
    var L4A3 = document.querySelector(".L4A3")
    L4A1.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L4A2.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    L4A3.addEventListener('click', function(event){
      l3answersScen5(event.target.classList[0])
      var s = document.querySelectorAll('.L2 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
    return
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen2(selected){
  if(selected === "L3A1"){
    console.log(selected)
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen3(selected){
  if(selected === "L3A1"){
    console.log(selected)
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen4(selected){
  if(selected === "L3A1"){
    console.log(selected)
  }
  if(selected === "L3A2"){
    console.log(selected)
  }
}
function l3answersScen5(selected){
  if(selected === "L3A1"){
    console.log(selected)
    backToBeginning()
  }
  if(selected === "L3A2"){
    console.log(selected)
    backToBeginning()
  }
  if(selected === "L3A3"){
    console.log(selected)
    backToBeginning()
  }
}

function backToBeginning(){
  main.innerHTML = `
    <div class="level L1">
      <p class="L1Q1">
         go walk around the park and look around find some food 
      </p>
      <button class="L1A1">go look to fight zombies </button>
      <button class="L1A2">go towards the exit/button>
      <button class="L1A3">go find some food</button>
    </div>
  `
  var L1A1 = document.querySelector(".L1A1")
  var L1A2 = document.querySelector(".L1A2")
  var L1A3 = document.querySelector(".L1A3")

  L1A1.addEventListener('click', function(event){
    main.innerHTML = ""
    l1answrs(event.target.value)
    var s = document.querySelectorAll('.L1 button')
    s.forEach(function(btn){
        btn.disabled
      })
    })
    
    L1A2.addEventListener('click',function(event){
      l1answrs(event.target.classList[0])
      var s = document.querySelectorAll('.L1 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
  
    L1A3.addEventListener('click',function(event){
      l1answrs(event.target.classList[0])
      var s = document.querySelectorAll('.L1 button')
      s.forEach(function(btn){
        btn.disabled
      })
    })
}

L1A1.addEventListener('click', function(event){
  l1answrs(event.target.classList[0])
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
      btn.disabled = false
    })
  })
  
  L1A2.addEventListener('click',function(event){
    l1answrs(event.target.classList[0])
    var s = document.querySelectorAll('.L1 button')
    s.forEach(function(btn){
      btn.disabled = false
    })
  })

  L1A3.addEventListener('click',function(event){
    l1answrs(event.target.classList[0])
    var s = document.querySelectorAll('.L1 button')
    s.forEach(function(btn){
      btn.disabled = false
    })
  })
