// variables


let btn=document.querySelector('#generate')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')

const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
    },
    {
        quote: "The purpose of our lives is to be happy.",
        person: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        person: "Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        person: "Mae West"
    }
];

btn.addEventListener("click",function(){
    let random=Math.floor( Math.random()*quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


})