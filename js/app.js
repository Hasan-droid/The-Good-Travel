'use-strict'
function _id(id)
{
    return document.getElementById(id);
}

let table=_id("table");
let form=_id("form");

function Place(name , place , trans)
{
    this.name=name;
    this.place=place;
    this.trans=trans;
    Place.all.push(this);
}
Place.all=[];

function setLocal(){
    localStorage.setItem("places" , JSON.stringify(Place.all))
}

function getlocal(){
    let conv=localStorage.getItem("places")
    if (conv)
    {
        Place.all=JSON.parse(conv);
        getrender_data();
    }
}

Place.prototype.render=function(){
    let tr=document.createElement("tr")
    table.appendChild(tr);

    let etd=document.createElement("td");
    tr.appendChild(etd);

    let td=document.createElement("td");
    tr.appendChild(td);

    td.textContent=`place name ${this.name}\n 
    place Trip ${this.place}\n
    type of transport ${this.trans} \n`
    setLocal();
}

function getrender_data(){
    for(let i=0 ; i<Place.all.length ; i++){
        let tr=document.createElement("tr")
        table.appendChild(tr); 

        let etd=document.createElement("td");
        tr.appendChild(etd);

        let td=document.createElement("td");
        tr.appendChild(td);

        td.textContent=`place name ${Place.all[i].name} / \n 
        place Trip ${Place.all[i].place} / \n
        type of transport ${Place.all[i].trans}/  \n`
    
    
    }
}

form.addEventListener("submit" , addNewPlace);
function addNewPlace(event){
    event.preventDefault();
   let placen=event.target.pname.value;
   let placet=event.target.tripplace.value;
   let plavetrans=event.target.transporttype.value;

  let newplace= new Place(placen , placet , plavetrans);

   newplace.render();

}
getlocal();