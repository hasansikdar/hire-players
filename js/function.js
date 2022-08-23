// search function
function search(element){
    let inputValue = element.parentNode.children[1].value;
    console.log(inputValue);
    let url = "https://www.google.com/search?q=" + inputValue;
    window.open(url, "_self");
}

// This function collected an array and get all element 
function allPlayerDisplay(elements){
    for(const element of elements ){
        displayPlayers(element);
    }
}

//This function will be show all players card in display dynamically
function displayPlayers(player){
    let allPlayers = document.getElementById("all-players");

    let div = document.createElement("div");
    div.innerHTML = `
        <div id="child" class="" style="">
            <div class="card text-center" style="width:100%;">
                <img src="${player.image}" class="card-img-top" alt="...">
                <div class="card-body text-white" style="background:black">
                <h5 class="card-title fs-4 fw-bold">${player.name}</h5>
                <p class="card-text fs-6"><span>${player.gols} Goals </span> - <span>${player.assist} Assist</span></p>
                <button onclick="addToPlayer(this)" id="select-button" class="btn btn-primary text-uppercase w-75">select</button>
                </div>
            </div>
        </div>
    `;
    div.classList.add("col-sm-6", "col-md-4", "my-2");
    allPlayers.appendChild(div);
}

// This function will be  select player item show will be in select section
function addToPlayer(element){

    let name = element.parentNode.children[0].innerText;
    
    if(selectItemArray.length >= 5){
        return alert("You can select Maximum 5 players");
    }
    selectItemArray.push(name);
    let selectItem = document.getElementById("selectItem").innerText = selectItemArray.length;
    
    let tableList = document.getElementById("table-list");
    let tr = document.createElement("tr");

    tr.setAttribute("onclick", "popout(this)")
    tr.setAttribute("style", "padding:5px 0");
    for(let x = 0; x < selectItemArray.length; x++){
        tr.innerHTML = `
        <th>${x+1}</th>
        <td>${name}</td>
        <td  style="width:0;"><button class="text-light" style="background:red;padding:0px 6px;border:none;outline:none;">&times;</button></td>
    `;
    }
    tableList.appendChild(tr);

    element.setAttribute("disabled", "true");

    let arrayLength = selectItemArray.length;

    return arrayLength;
}


// this function removed an element from an array
function popout(element){
    let getItem = element.classList.add("d-none");

    selectItemArray.pop();
    
    let selectItem = document.getElementById("selectItem").innerText = selectItemArray.length;
 
}

// This function will be get input value and will be return value
function getInputValue(element){
    let getInput = document.getElementById(element).value;

    return parseFloat(getInput);
   
}

// This function will be calculate expenses player
function calculate(){
    let perPlayerValue = getInputValue("per-player");
    let selectItem = document.getElementById("selectItem").innerText;

    // calculate perplayer and select player item and add Value in expenses element;
    let TotalPlayerExpenses = perPlayerValue * selectItem;
    
    if(isNaN(TotalPlayerExpenses)){
      return  alert("please input valid number");
    }
    let totalExpenses = document.getElementById("player-expenses").innerText = TotalPlayerExpenses;

    return TotalPlayerExpenses;
}


// This function will be calculate total expenses player
function calculateTotal(){
    let managerCost = getInputValue("manager-cost");
    let coachCost = getInputValue("coach-cost");

    // total money sum and add value in total element;
    
    let Total = managerCost + coachCost + calculate();

    if(isNaN(Total)){
        return  alert("please input valid number");
    }
    document.getElementById("total").innerText = Total;
   
}

