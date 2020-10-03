function backgroundToggle(me){
    var target = document.querySelector('body')

    if(me.value === 'night'){
        target.style.backgroundColor = 'black'
        target.style.color = 'white'
        me.value = 'day'
    }else{
        target.style.backgroundColor = 'white'
        target.style.color = 'black'
        me.value = 'night'
    }
}