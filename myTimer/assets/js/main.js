function clock(){
    function createHourSeconds(seconds){
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('.clock');
    const mark = document.querySelector('.mark');
    let timer;
    let seconds = 0;

    function startClock(){
        timer = setInterval(function (){
            seconds++;
            clock.innerHTML = createHourSeconds(seconds);
        }, 1000)
    }

    document.addEventListener('click', function(e){
        let el = e.target;

        if(el.classList.contains('reset')){
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('stopped');
            seconds = 0;
        }
        if(el.classList.contains('start')){
            clock.classList.remove('stopped');
            clearInterval(timer);
            startClock();
        }
        if(el.classList.contains('stop')){
            mark.innerHTML += `${createHourSeconds(seconds)}</br>`;
            clearInterval(timer);
            clock.classList.add('stopped');
        }
    });
}
clock();