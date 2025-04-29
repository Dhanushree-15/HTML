function onClick(){
    let doThis=document.getElementsByName('nameErrorClass')[0].innerHTML='hellooo'
    console.log('dothis>>dothis',doThis)
     document.log('errorID').innerHTML='work'
}
function click(){

    let doThis=document.getElementsByTagName ('h2')[0].innerHTML='love'
    console.log('dothis>>dothiss',doThis)
    document.log('bottID').innerHTML='work'
}

function Submitform() { 

    let values = true;

    let name = document.formName.nameName.value
    let num = document.formName.numb.value
    let age = document.formName.ageAge.value
    let pass = document.formName.passwordPassword.value
    let conf = document.formName.confirmpass.value


    if (name.length < 3 || name.length > 20) {
        values = false;
        setError("id","please provide the proper name");

    }
    if (num.length != 10) {
        values = false;
        setError("id","number should be 10 digits");

    }
    if (age < 18) {
        values = false;
        setError();


    }
    // alert(name+num+age)
    return values;
}

function setError(id,message) {
    // alert(id,message)
}