function showLoading(){
    console.log('1. Loading Screen Appeared');
}

function hideLoading(){
    console.log('4. Loading Screen Hidden');
}

function getData(callback){
    console.log('2. Start Pulling Data');

setTimeout(()=>{
    console.log('3. Finished Pulling Data');
    callback();
},2000)
}

showLoading();
getData(hideLoading);