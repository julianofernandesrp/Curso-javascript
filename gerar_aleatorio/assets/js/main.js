function Gerador() {


    try {
        this.display = document.querySelector('.display');
        this.marcador = document.querySelector('.marcador');
        this.valor = 0;
        
        this.inicia = () => this.getClick();
        
           
        this.getClick = () => {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('gerar')) this.gerarNum();
                if (el.classList.contains('clean')) this.cleanDisplay();
                if (el.classList.contains('marcar')) this.marcarNum(this.valor);
            });
        };

        this.gerarNum = () => {
            let r = Math.random() * (99 - 0) + 0;
            r = Math.floor(r);
            this.valor = r;
            this.addDisplay(r);
        };

        this.addDisplay = gerado => this.display.value = gerado;

        this.cleanDisplay = () => {
            this.display.value = ''
            this.marcador.innerHTML = '';
            return;
        };


        this.marcarNum = (mark) => {
            if (!this.display.value) return;
            this.marcador.innerHTML += `${mark} </br>`;
            return;
        };
    } catch (e) {
        console.log('deu B.O');
    }
}

const gerador = new Gerador();
gerador.inicia();