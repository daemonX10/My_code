const books=[
    {
        title:"the great gatsby",
        author: "F. scott Fitzgerald",
        year:1925
    },
    {
        title:"To kill a mockingBird",
        author:"Harper Lee",
        year: 1960
    },
    { 
        title:"who are you?",
        author:"George Orwell",
        year:1949
    },
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        year:1813
    }
];

function logTitle(titles){
    titles.sort();
    console.log(titles);
}

function extractTitles(books,callback){
    const titles=books.map((books)=>
        books.title
    );
    callback(titles);
}

extractTitles(books,logTitle);