const bearCrawl = document.querySelector('.bearings-crawl');
const maintCrawl=document.querySelector('.maintenance-crawl')
const bearRight = document.querySelector('.bear-right');
const bearLeft = document.querySelector('.bear-left');
const maintRight = document.querySelector('.maint-right');
const maintLeft = document.querySelector('.maint-left');
const bearingsList = [];
const maintList = [];


//create an array of bearings and units best selers

function Bearings (name, description, price, imgName){
    this.name=name;
    this.description=description;
    this.price=price;
    this.imgPath=`images/${imgName}.png`;
}

bearingsList.push(new Bearings("6356-4R", "Deep groove ball bearings", 15.99, "Bear1"));
bearingsList.push(new Bearings("6500-2Z", "Deep groove ball bearings", 17.99, "Bear2"));
bearingsList.push(new Bearings("2424-2D", "Deep groove ball bearings", 13.99, "Bear3"));
bearingsList.push(new Bearings("1244-RT", "Deep groove ball bearings", 19.99, "Bear4"));
bearingsList.push(new Bearings("1343-BZ", "Deep groove ball bearings", 14.49, "Bear5"));
bearingsList.push(new Bearings("4386-GR", "Deep groove ball bearings", 12.99, "Bear6"));
bearingsList.push(new Bearings("3955-4U", "Deep groove ball bearings", 13.49, "Bear7"));


//create an array of maintenance products best selers

function Maint (name, description, price, imgName){
    this.name=name;
    this.description=description;
    this.price=price;
    this.imgPath=`images/${imgName}.png`;
}

maintList.push(new Maint("6356-4R", "Deep groove ball bearings", 15.99, "Maint1"));
maintList.push(new Maint("6500-2Z", "Deep groove ball bearings", 17.99, "Maint2"));
maintList.push(new Maint("2424-2D", "Deep groove ball bearings", 13.99, "Maint3"));
maintList.push(new Maint("1244-RT", "Deep groove ball bearings", 19.99, "Maint4"));
maintList.push(new Maint("1343-BZ", "Deep groove ball bearings", 14.49, "Maint5"));
maintList.push(new Maint("4386-GR", "Deep groove ball bearings", 12.99, "Maint6"));
maintList.push(new Maint("3955-4U", "Deep groove ball bearings", 13.49, "Maint7"));
maintList.push(new Maint("3955-4U", "Deep groove ball bearings", 13.49, "Maint8"));


//make a function that creates nodes from each element of the array

function nodeCreate(list, crawl, idForm, crawlRight, crawlLeft) {
    list.forEach(function (item, i) {
        const markup = `<div class="crawler-crawl-products" id="${idForm}${i + 1}">
                        <div class="crawler-crawl-products-img" id="img${idForm}${i + 1}" ></div>
                        <div class="crawler-crawl-products-info">
                            <p class="crawler-crawl-products-info-title">${item.name}</p>
                            <p class="crawler-crawl-products-info-description">${item.description}</p>
                            <p class="crawler-crawl-products-info-price">
                                <span crawler-crawl-products-info-price-from>from </span>
                                <span class="crawler-crawl-products-info-price-amount">
                                    <span title="${item.price}">${item.price}</span>&euro;
                                </span>
                            </p>
                            <div class="item-number-container">
                                <span class="glyphicon glyphicon-minus remove-item"></span>
                                <input type="text" class="number-of-items" value=1>
                                <span class="glyphicon glyphicon-plus add-item"></span>
                            </div>
                                <button class="add-to-cart">
                                    <span class="glyphicon glyphicon-shopping-cart"></span>
                                    <span class="add-to-cart-add">Add to cart</span>
                                </button>
                        </div>
                    </div> `

        crawl.insertAdjacentHTML("beforeend", markup);
        document.querySelector(`#img${idForm}${i + 1}`).style.backgroundImage = `url(${item.imgPath})`;
       

    })

    //go right
    
    let num = 1;
    document.querySelector((`#${idForm}${num + 1}`)).classList.add('margin-tablet');

    document.querySelector((`#${idForm}${num + 1}`)).classList.add('margin-desktop');
    document.querySelector((`#${idForm}${num + 2}`)).classList.add('margin-desktop-right');

    crawlRight.addEventListener('click', function () {
        if (num< list.length) {
            document.querySelector(`#${idForm}${num}`).style.display = "none";          
            num++;
            document.querySelector((`#${idForm}${num}`)).classList.remove('margin-tablet');
            document.querySelector((`#${idForm}${num + 1}`)).classList.add('margin-tablet');

            document.querySelector((`#${idForm}${num}`)).classList.remove('margin-desktop');
            document.querySelector((`#${idForm}${num + 1}`)).classList.remove('margin-desktop-right');
            document.querySelector((`#${idForm}${num + 1}`)).classList.add('margin-desktop');
            document.querySelector((`#${idForm}${num + 2}`)).classList.add('margin-desktop-right');
        }
    });

    //go left
    
    crawlLeft.addEventListener('click', function () {
        if (num > 1) {
            document.querySelector(`#${idForm}${num - 1}`).style.display = "block";
            num--;
            document.querySelector((`#${idForm}${num+1}`)).classList.add('margin-tablet');
            document.querySelector((`#${idForm}${num + 2}`)).classList.remove('margin-tablet');
            
            document.querySelector((`#${idForm}${num + 2}`)).classList.remove('margin-desktop');
            document.querySelector((`#${idForm}${num + 1}`)).classList.add('margin-desktop');
            document.querySelector((`#${idForm}${num + 2}`)).classList.add('margin-desktop-right');
            document.querySelector((`#${idForm}${num + 3}`)).classList.remove('margin-desktop-right');
        }
    })
}

//create the nodes

nodeCreate(bearingsList, bearCrawl, 'bear-', bearRight, bearLeft);
nodeCreate(maintList, maintCrawl, 'maint-', maintRight, maintLeft);


//increase the number of units

const addItem = document.querySelectorAll(".add-item");
addItem.forEach(item => {
    item.addEventListener('click', function (n) {
        if (n.target.previousElementSibling.value > 0) {
            ++n.target.previousElementSibling.value;
            let value = n.target.parentNode.parentNode.children[2].children[1].children[0].title;
            //let value = n.target.parentNode.children[2].children[1].children[0].innerHTML;
            n.target.parentNode.parentNode.children[2].children[1].children[0].innerHTML = (value * n.target.previousElementSibling.value).toFixed(2);
        } else {n.target.parentNode.parentNode.children[2].innerHTML='Please enter a number above 0'}
    })
})


//decrease the number of units

const removeItem = document.querySelectorAll(".remove-item");
removeItem.forEach(item => {
    item.addEventListener('click', function (n) {
        if (n.target.nextElementSibling.value > 1) {
            --n.target.nextElementSibling.value
            let value = n.target.parentNode.parentNode.children[2].children[1].children[0].title;
            //const value = n.target.parentNode.children[2].children[1].children[0].innerHTML;
            n.target.parentNode.parentNode.children[2].children[1].children[0].innerHTML = (value * n.target.nextElementSibling.value).toFixed(2);
        } 
    })
})


