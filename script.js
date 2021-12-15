const calculateTemp=()=>{
    console.log("hello");
    const numberTemp=document.getElementById('temp').value;
    // console.log(numberTemp);
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=tempSelected.options[tempSelected.selectedIndex].value;
    const celToFah=(cel)=>{
        console.log("fahrenheit");
        let fahrenheit=Math.round((cel*9/5)+32);
        console.log(fahrenheit);
        return fahrenheit;
    }
    const fehToCel=(fehr)=>{
        let celsius=Math.round((fehr-32)*5/9);
        return celsius;
    }
    let result;
    if(valueTemp=='cel'){
        result=celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result} Fahrenhents`;
    }
    else{
        result=fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result} Celsius`;
    }
}