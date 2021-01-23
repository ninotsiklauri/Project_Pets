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
        'contact':'Contact'
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
        'contact':'კონტაქტი'
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