function outer(){
    const a=10;

    function inner(){
        const b=20;
        console.log(a+b);
    }

    return inner;
}

const closureFn=outer();
closureFn();

function parent(){
    let count=0;
    function child(){
        count+=1;
        console.log(count);
    }
    return child;
}

const increment = parent();
increment();
increment();
increment();

// Example 2 

function secretPassword(){
    const password ='xh38sk';

    return{
        guessPassword:function(guess){
            if(guess===password){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

const passwordGame=secretPassword();
console.log(passwordGame.guessPassword('xh38sk'));
console.log(passwordGame.guessPassword('damodar'));