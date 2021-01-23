//--------------------------------dark mode-------------------------------------
var darkMode = document.querySelector('button.drk');
var right = document.querySelector('div.right');
var left = document.querySelector('div.left');
var header = document.querySelector('div.header');
var midd = document.querySelector('div.midd');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    right.classList.toggle('darkleft');
    left.classList.toggle('darkleft');
    header.classList.toggle('darkheader');
    midd.classList.toggle('darkmidd');
})
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
        'reason':'The reason for the creation:',
        'about':'About the shelter:',
        'helps':'The shelter helps:',
        'features':'Shelter / Website Features:',
        'additional':'Additional information:',
        'one':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book.`,
        'two':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book.`,
        'three':'Lorem Ipsum is simply dummy text of the printing',
        'four':'Lorem Ipsum is simply dummy text of the printing',
        'five':'Lorem Ipsum is simply dummy text of the printing',
        'six':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        'seven':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        'eight':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        'nine':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        'lastone':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        s standard dummy`,
        'lasttwo':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        s standard dummy`,
        'lastthree':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        s standard dummy`,
        'lastfour':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        s standard dummy`
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
        'reason':'შექმნის მიზეზი:',
        'about':'თავშესაფრის შესახებ',
        'helps':'თავშესაფარი იფარებს ან ეხმარება:',
        'features':'თავშესაფრის/ვებ-საიტის ფუნქციები:',
        'additional':'დამატებითი ინფორმაცია:',
        'one':`პანდემიამ არამარტო საზოგადოების ცხოვრების წესში გამოიწვია ცვლილებები, არამედ ცხოველების 
        (განსაკუთრებით უპატრონო ცხოველების)  სიცოცხლეს დიდი საფრთხე შეუქმნა. ხშირია შემთხვევა, 
        როცა პატრონები ვეღარ ახერხებენ თავიანთი ცხოველების მოვლას და უხდებათ მათი გაყიდვა ან გაჩუქება. 
        უფრო ხშირად კი დროებით იკედლებენ უსახლკარო ცხოველებს, რომლებსაც შემდეგ აჩუქებენ სხვა პატრონზე.`,
        'two':`თავშესაფრის ტერიტორიაზე განთავსებულია ოფისი, ვეტერინალური კლინიკა, სარეაბილიტაციო პალატები,  
        სამშობიარო ბლოკი, კარანტინის ბლოკი, სალონი, სასეირნო ტერიტორია, ცხოველების ღია და დახურული ვოლიერები.`,
        'three':'1. პატრონისაგან მიტოვებულ ცხოველებს',
        'four':'2. დაკარგულ ცხოველებს.',
        'five':'3. ტრამვირებულ ან ავადმყოფ უპატრონო ქუჩის ცხოველებს.',
        'six':`თავშესაფარიდან ხდება ცხოველების გაჩუქება. ამისათვის საჭიროა ოჯახის დანარჩენი  წევრების სიტყვიერი 
        თანხმობა, პირადობის მოწმობა და გასაუბრების გავლა თავშესაფარის დამფუძნებელთან ან დირექტორთან.`,
        'seven':'თავშესაფრის გვერდზე შეგიძლიათ განათავსოთ განცხადება იმ შემთხვევაში თუ გსურთ გააჩუქოთ თქვენი შინაური ცხოველი.',
        'eight':`ვებ-საიტის ასევე აქვს შემეცნებითი ფუნქციაც, შეგიძლიათ შეიტყოთ შინაური ცხოველების ჯიშებთან, ჯანმრთელობასთან, 
        კვებასთან, მოვლასთან, წვრთნასთან და სხვა საინტერესო თემასთან დაკავშირებული ინფორმაცია.`,
        'nine':'ვებ-საიტის დახმარებით შეგიძლიათ შეიძინოთ თქვენი შინაური ცხოველისთვის საკვები, აქსესუარი და სხვ.',
        'lastone':`გაჩუქებულ ცხოველებს აქვს უფასო სამედიცინო მომსახურეობა სიცოცხლის ბოლომდე.`,
        'lasttwo':`პერიოდულად ხდება გაჩუქებული ძაღლის მონახულება თავშესაფარის თანამშრომლების მიერ. თუ ის არის 
        არასათანადო პირობებში, ხდება მისი დაბრუნება უკან თავშესაფარში.`,
        'lastthree':`დაარსებიდან დღემდე თავშესაფარის  მიერ გადარჩენილი და შეფარებულია 3 000 – მდე უსახლკარო და 
        მიტოვებული ცხოველი, არა ერთი მათგანი კი სანდო ხელშია გაჩუქებული.`,
        'lastfour':`დღეისათვის თავშესაფარში 230– მდე სრულიათ ჯანმრთელი და ვაქცინირებული ცხოველია, 
        რომლებიც ორჯერადი სრულყოფილი კვებით და ვეტერინალური მომსახურეობით არიან უზრუნველყოფილი,
        ყოველი მათგანი ელის ახალ პატრონს.`
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