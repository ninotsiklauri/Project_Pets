//--------------------------------dark mode-------------------------------------
var darkMode = document.querySelector('button.drk');
var right = document.querySelector('div.right');
var left = document.querySelector('div.left');
var header = document.querySelector('div.header');
var slideborder = document.getElementsByClassName("slider1");
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    right.classList.toggle('darkright');
    left.classList.toggle('darkleft');
    header.classList.toggle('darkheader');
    for (let i = 0; i < slideborder.length; i++) {
        slideborder[i].classList.toggle('darkslider1');
    }
})
//---------------------------------slide1--------------------------------------
var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
    function showDivs(n) {
        var x = document.getElementsByClassName("slider1");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (var i = 0; i < 3; i++) {
            x[i].style.display = "none";  
        }
        x[slideIndex-1].style.display = "block";
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
        'aboutanimals':'About Animals',
        'existingarticles':'Existing Articles',
        'info':'Pet information / Pet information / Pet information / Pet information',
        'dalmatian':'Dalmatian',
        'cat':'Savannah Cat',
        'pit':'Pit bull',
        'infopit':`Pit bull is a term used in the United States for a type of dog descended from bulldogs 
        and terriers, while in other countries such as the United Kingdom the term is used as an abbreviation 
        of the American Pit Bull Terrier breed. The term was first used in 1927.Within the United States 
        the pit bull is usually considered a heterogeneous grouping that includes the breeds American Pit Bull Terrier,`,
        'infocat':`The Savannah cat is the largest of the cat breeds. A Savannah cat is a cross between a 
        domestic cat and a serval, a medium-sized, large-eared wild African cat. The unusual cross became 
        popular among breeders at the end of the 1990s, and in 2001 The International Cat Association (TICA) 
        accepted it as a new registered breed. In May 2012, TICA accepted it as a championship breed.`,
        'infodalmatian':`The Dalmatian is a breed of Large -sized dog, noted for its unique white coat marked 
        with black or liver-colored spots and used mainly as a carriage dog in its early days. The origins of 
        the breed can be traced back to Croatia and its historical region of Dalmatia. It is thought that early 
        ancestors of the breed were certain breeds of pointers and a spotted Great Dane. Today, it is a popular 
        family pet and many dog enthusiasts enter Dalmatians into kennel club competitions.`,
        'dogs':'Dogs',
        'cats':'Cats',
        'birds':'Birds',
        'rep':'Rep',
        'rodents':'Rodent',
        'fishs':'Fishs',
        'bed':`Dog's bed`,
        'bedinfo':'Dog bed, soft and quality, for puppies and dogs. Different sizes ...'
    },
    'ka':{
        'main':'მთავარი',
        'basic':'ძირითადი ინფორმაცია',
        'profile':'პროფილი',
        'other':'სხვა',
        'contact':'კონტაქტი',
        'authorization':'ავტორიზაცია',
        'registration':'რეგისტრაცია',
        'aboutanimals':'ცხოველების შესახებ',
        'existingarticles':'არსებული სტატიები',
        'info':'ინფორმცია შინაური ცხოველების შესახებ/ინფორმცია შინაური ცხოველების შესახებ',
        'dalmatian':'დალმატინელი',
        'cat':'სავანის კატა',
        'pit':'პიტბული',
        'infopit':`ამერიკულ პიტ ბულ ტერიერს შემოკლებით ხშირად მოიხსენიებენ როგორც პიტ ბულ ტერიერს,
        პიტ ბულს ან პიტს. ძაღლის ეს ჯიში საჩხუბრად გამოიყვანეს და დღემდე საშიში ძაღლის 
        რეპუტაციას ინარჩუნებს. მრავალ ქვეყანაში აკრძალვებია დაწესებული პიტის ყოლასთან დაკავშირებით. 
        რა თქმა უნდა, პიტ ბულს აქვს პოტენციალი იყოს ძალიან საშიში, თუმცა ყველაფერი მის აღზრდაზეა დამოკიდებული.`,
        'infocat':`სავანა (ინგლ. Savannah cat) - შინაური კატების ჯიში, რომელიც დაიბადა გარეული აფრიკის სერვალი 
        და შინაური კატების გადაკვეთის შედეგად. დიდი ზომა, ველური გარეგნობა, ელეგანტურობა, სწორედ ეს განასხვავებს 
        ამ ჯიშს. მაგრამ, სავანები ძალიან ძვირია, იშვიათია და ხარისხიანი კატის ყიდვა არც ისე ადვილი საქმეა.`,
        'infodalmatian':`ენერ­გი­უ­ლი და მხი­ა­რუ­ლი დალ­მა­ცი­ე­ლი შე­სა­ნიშ­ნა­ვი არ­ჩე­ვა­ნია მათ­თვის, ვი­საც მის სა­ვარ­ჯი­შოდ 
        და გა­საწ­ვრთნე­ლად საკ­მა­რი­სი დრო აქვს. მი­სი გა­რეგ­ნო­ბა ყვე­ლას აღაფ­რთო­ვა­ნებს, მაგ­რამ ამ ძაღლს სხვა უფ­რო 
        მნიშ­ვნე­ლო­ვა­ნი ღირ­სე­ბე­ბიც აქვს. დალ­მა­ტი­ნე­ლის წარ­მო­შო­ბა გა­ურ­კვე­ვე­ლი­ა, მაგ­რამ ცნო­ბი­ლი­ა, რომ XIX სა­უ­კუ­ნის 
        ევ­რო­პა­სა და ბრი­ტა­ნეთ­ში მა­თი ძი­რი­თა­დი ფუნ­ქცია ცხე­ნებ­შებ­მუ­ლი ეტ­ლის გვერ­დით სირ­ბი­ლი და მძარ­ცვე­ლე­ბის­გან მგზავ­რე­ბის დაც­ვა იყო.`,
        'dogs':'ძაღლები',
        'cats':'კატები',
        'birds':'ფრინველები',
        'rep':'რეპტილიები',
        'rodents':'მღრღნელები',
        'fishs':'თევზები',
        'bed':'ძაღლის საწოლი',
        'bedinfo':'ძაღლის საწოლი, რბილი და ხარისხიანი, ლეკვებისთვის და ძაღლებისთვის. სვადასხვა ზომის ...'
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