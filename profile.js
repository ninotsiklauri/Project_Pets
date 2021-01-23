//--------------------------------dark mode-------------------------------------
var darkMode = document.querySelector('button.drk');
var left = document.querySelector('div.left');
var header = document.querySelector('div.header');
var midd = document.querySelector('div.midd');
var container = document.querySelector('div.container');
var specifikacia = document.querySelectorAll('div.specifikacia');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    left.classList.toggle('darkleft');
    header.classList.toggle('darkheader');
    midd.classList.toggle('darkmidd');
    container.classList.toggle('darkcontainer');
    for (let i = 0; i < specifikacia.length; i++) {
        specifikacia[i].classList.toggle('darkspecifikacia');
        specifikacia[i].style.borderTop = "none";
        specifikacia[i].style.borderLeft = "none";
        specifikacia[i].style.borderRight = "none";
    }
})
//---------------------------------slider---------------------------------------
var myIndex = 0;
    var myIndex2 = 0;
    change();
    changeborder();
    
    function change() {
        var x = document.getElementsByClassName("photo");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block"; 
        setTimeout(change, 2000); 
    }
    function changeborder(){
        var y = document.getElementsByClassName("demo");
        for (var i = 0; i < y.length; i++){
            y[i].classList.add('demo');
        }
        myIndex2++;
        if (myIndex2 > y.length) {myIndex2 = 1}
        y[myIndex2-1].classList.add('demo2');
        setTimeout(changeborder, 2000); 
    }
//----------------------------------mouse----------------------------------------
function big(x) {
    x.style.padding = "15px";
    x.style.fontSize = "23px";
    x.style.backgroundColor = "rgb(187, 187, 187)";
}
function normal(x) {
    x.style.padding = "10px";
    x.style.fontSize = "16px";
    x.style.backgroundColor = "";
}
//--------------------------------languages--------------------------------------
var arrLang = {
    'en':{
        'main':'Main',
        'basic':'Basic Information',
        'profile':'Profile',
        'other':'Other',
        'contact':'Contact',
        'authorization':'Authorization',
        'registration':'Registration',
        'dogs':'Dogs',
        'cats':'Cats',
        'birds':'Birds',
        'rep':'Rep',
        'rodents':'Rodent',
        'fishs':'Fishs',
        'contact':'Contact',
        'nameusername':'Name/Username',
        'additional':'Additional Information',
        'statement':'Statement',
        'specifications':'Specifications',
        'breed':'Dog Breed:',
        'husky':'Siberian Husky',
        'age':'Age:',
        'month':'2 Month',
        'gender':'Gender',
        'male':'Male',
        'color':'Color:',
        'black':'Black',
        'documents':'Documents:',
        'yes':'Yes',
        'description':'Description',
        'haskisagwera1':`A husky is a sled dog used in the polar regions. One can differentiate huskies from other 
        dog types by their fast pulling-style. They represent an ever-changing crossbreed of the fastest dogs 
        (the Alaskan Malamute, by contrast, pulled heavier loads at a slower speed). Humans use huskies in sled-dog racing. 
        Various companies have marketed tourist treks with dog sledges for adventure travelers in snow regions. 
        Huskies are also kept as pets, and groups work to find new pet homes for retired racing and adventure-trekking dogs.`,
        'haskisagwera2':`A husky is a sled dog used in the polar regions. One can differentiate huskies from other 
        dog types by their fast pulling-style. They represent an ever-changing crossbreed of the fastest dogs 
        (the Alaskan Malamute, by contrast, pulled heavier loads at a slower speed). Humans use huskies in sled-dog racing. 
        Various companies have marketed tourist treks with dog sledges for adventure travelers in snow regions. 
        Huskies are also kept as pets, and groups work to find new pet homes for retired racing and adventure-trekking dogs.`,
        'haskisagwera3':`A husky is a sled dog used in the polar regions. One can differentiate huskies from other 
        dog types by their fast pulling-style. They represent an ever-changing crossbreed of the fastest dogs 
        (the Alaskan Malamute, by contrast, pulled heavier loads at a slower speed).`
},
    'ka':{
        'main':'მთავარი',
        'basic':'ძირითადი ინფორმაცია',
        'profile':'პროფილი',
        'other':'სხვა',
        'contact':'კონტაქტი',
        'authorization':'ავტორიზაცია',
        'registration':'რეგისტრაცია',
        'dogs':'ძაღლები',
        'cats':'კატები',
        'birds':'ფრინველები',
        'rep':'რეპტილიები',
        'rodents':'მღრღნელები',
        'fishs':'თევზები',
        'contact':'კონტაქტი',
        'nameusername':'სახელი/გვარი',
        'additional':'დამატებითი ინფორმაცია',
        'statement':'განცხადება',
        'specifications':'სპეციფიკაციები',
        'breed':'ძაღლის ჯიში:',
        'husky':'ციმბირული ჰასკი',
        'age':'ასაკი:',
        'month':'2 თვე',
        'gender':'სქესი',
        'male':'ხვადი',
        'color':'ფერი:',
        'black':'შავი',
        'documents':'საბუთები:',
        'yes':'დიახ',
        'description':'აღწერა',
        'haskisagwera1':`ციმბირულ ჰასკის მომთაბარე ესკიმოსები მარხილში შესაბმელად იყენებდნენ. XIX საუკუნეში 
        ის ვაჭრებმა დაინახეს და 1909 წელს რამდენიმე ძაღლი აშშ-ში ჩაიყვანეს. ელეგანტური ციმბირული 
        ჰასკი სხვა შესაბმელ ძაღლებთან შედარებით პატარაა. შპიცის სხვა სახეობების მსგავსად ის იშვიათად 
        ყეფს. ჰასკი ძალიან პოპულარულია კანადაში, აშშ-სა და იტალიაში, მისი 
        ბალნის ფერი შეიძლება მრავალფეროვანი იყოს, ის ერთ-ერთია იმ მცირერიცხოვან ძაღლებს შორის, 
        რომლის თვალის ფერი შეიძლება იყოს ცისფერი, ყავისფერი, თხილისფერი ან ვარდისფერი.`,
        'haskisagwera2':`იმბირული ჰასკი ღირსეული, კეთილი ძაღლია, შესანიშნავი კომპანიონია. ის ვერ ეგუება ქალაქის 
        პირობებში ცხოვრებას, სჭირდება დიდი ფიზიკური დატვირთვა, კარგად იტანს სიცივეს. აქვს დაკუნთული, 
        სწორი ფეხები, საშუალო ზომის სამკუთხა ყურები, კუდი დამძიმებულია სქელი ბალნით და ბეწვის ცვენის 
        პერიოდში განსაკუთრებული მოვლა სჭირდება.`,
        'haskisagwera3':`ციმბირული ჰასკი ძალიან ჭკვიანი, ენერგიული და მეგობრულია. სწრაფი ადაპტაციის უნარის გამო, ჰასკებს 
        თერაპიის დროსაც წარმატებით იყენებენ.`
    }
}
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});