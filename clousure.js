/**
 * This is a closure property
 * After executing the outer funtion still the counter variable is holded by inner function
 * @returns 
 */
function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter)
    }
    return inner;
}

const fn = outer()
fn(); // 1
fn(); // 2