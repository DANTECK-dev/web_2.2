function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
function getRandomRGB()
{
    return "rgb("+getRandomInt(255)+","+getRandomInt(255)+"," +getRandomInt(255)+")";
}

document.getElementById("date").innerHTML=new Date().toLocaleDateString();

var time=new Date();
if((time.getMinutes()%2)==0){
    document.getElementById("hdr").innerHTML="Каталог лесных зверей";
}
else
{
    document.getElementById("hdr").innerHTML="Лесные звери";
}

function updateTime()
{
    let tmp=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
    document.getElementById("time").innerHTML= tmp;
}

setInterval(updateTime,1000);

var description=new Array();
description[0]="Главная страница содержит информацию о других страницах";
description[1]="Медведи - здесь предоставлена информация о медведях";
description[2]="Парнокопытные - здесь предоставлена информация о парнокопытных";
description[3]="Псовые - здесь предоставлена информация о псовых";
description[4]="Грызуны - здесь предоставлена информация о грызунач";

var indexOfDescription=-1;

function createDescription()
{
    indexOfDescription++;
    if(indexOfDescription==5)
    {
        indexOfDescription=0;
    }
    document.getElementById('pageDescription').innerHTML=description[indexOfDescription];
}

setInterval(createDescription,10000);

document.getElementById('rndclr').style.backgroundColor =getRandomRGB(255);
document.getElementById('pageDescription').style.backgroundColor =getRandomRGB(255);

function createAdvertising() {
    var advert=document.getElementById("advertising");
    advert.style.position="fixed"
    advert.style.left="300px";
    advert.style.top="200px";
    advert.style.backgroundColor =getRandomRGB(255)
    advert.style.width="700px"
    advert.style.height=300+"px";
    advert.style.margin=25+'px';
    advert.innerText="Реклама!!!"
    advert.style.textAlign="center"
    var newButton=document.createElement("button");
    newButton.innerText="X"
    newButton.style.float="right"
    newButton.style.width=30+'px';
    newButton.style.height=30+'px';
    newButton.setAttribute("onclick","rmv()");
    advert.appendChild(newButton);

}

function rmv()
{
    document.getElementById("advertising").remove();
}

setInterval(createAdvertising,5000);

class Link{
    constructor(page,linkText,help,className)
    {
        this.page=page;
        this.linkText=linkText;
        this.help=help;
        this.className=className;
    }

    get getLink()
    {
        return "<a href="+this.page+" class="+this.className+" title="+this.help+" >"+this.linkText+"</a>"
    }
    get getName()
    {
        return this.linkText;
    }
}

var arr=new Array();

arr[0]=new Link("Bears","Медведи","bears","bears");
arr[1]=new Link("Main","Главная страница","main","main");
arr[2]=new Link("Artiodactyls","Парнокопытные","artiodactyls","artiodactyls");
arr[3]=new Link("Dogs","Псовые","dogs","dogs");
arr[4]=new Link("Rodents","Грызуны","rodents","rodents");

document.getElementById('rndLink').innerHTML=arr[getRandomInt(5)].getLink;

class List{
    constructor(name,value)
    {
        this.name=name;
        this.value=value;
    }

    get elements()
    {
        return "<tr><td>"+this.name+"</td><td>"+this.value+"</td></tr>"
    }
    
}

var tableArray=new Array();

var result="<table class="+"someTable"+"><tr><th>Наименование</th><th>Изначальное количество на сайте</th></tr>";
for(let i=0;i<5;i++)
{
    if(i!=1)
    {
        tableArray[i]=new List(arr[i].getName,2);
        result+=tableArray[i].elements;
    }
}
result+="</table>";
document.getElementById('someTable').innerHTML=result;

function addcontent()
{
    var newTable=document.createElement("table");
    var newTr=document.createElement("tr");
    var newTd=document.createElement("td");
    var animalName=prompt("Введите название",);
    if(animalName!='')
    {
        var newAnimal=JSON.parse(localStorage.getItem(animalName));
        if(newAnimal==null||newAnimal==undefined)
        {
            var newAnimal={
                name: animalName,
                imgLink: prompt("Введите ссылку на картинку",),
                description: prompt("Введите описание",),
                vikiLink: prompt("Введите ссылку на википедию")
            };
            localStorage.setItem(animalName,JSON.stringify(newAnimal))
        }

        newTd.innerHTML=newAnimal.name;
        newTr.appendChild(newTd)
        newTd.style.backgroundColor=getRandomRGB();
    
        newTd=document.createElement("td")
        var newImg=document.createElement("img")
        newImg.setAttribute("src",newAnimal.imgLink);
        newTd.appendChild(newImg)
        newTr.appendChild(newTd)
        newTd.style.backgroundColor=getRandomRGB();
    
        newTd=document.createElement("td")
        newTd.innerHTML=newAnimal.description;
        newTr.appendChild(newTd)
        newTd.style.backgroundColor=getRandomRGB();
    
        newTd=document.createElement("td")
        var NewA=document.createElement("a")
        NewA.setAttribute("href",newAnimal.vikiLink,"target","-blank")
        NewA.innerText="Википедия";
        newTd.appendChild(NewA)
        newTr.appendChild(newTd)
        newTd.style.backgroundColor=getRandomRGB();
    
        newTable.appendChild(newTr);
        document.getElementById("userTable").appendChild(newTable);
    }
}

function buttonClick() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function buttonClick2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var navigationPanel=document.getElementsByTagName("nav")[0];

function search()
{
    const text=document.getElementsByTagName("input")[0].value;

    const symbols=new RegExp(text,"ig")
    console.log(symbols)

    for(let i=0;i<arr.length;i++)
    {
        if(symbols.test(arr[i].getName))
        {
            let tmp=document.createElement('div');
            tmp.style.border="1px black solid"
            tmp.style.backgroundColor=getRandomRGB();
            tmp.innerHTML=arr[i].getLink
            navigationPanel.appendChild(tmp);
        }
    }
}

var searcher=document.createElement('input');
searcher.setAttribute("placeholder","Поиск", "type","text");
navigationPanel.appendChild(searcher);

var button=document.createElement('button');
button.setAttribute("onclick","search()");
button.innerText="Поиск";
navigationPanel.appendChild(button);