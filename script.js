function pComp(){
    const comp = Math.round(Math.random() * 100);
    if(comp < 34)
        return 'semut';
    if(comp >= 34 && comp < 67)
        return 'orang';
    return 'gajah';
}

function result(player, comp)
{
    if(player == comp)
        return 'SERI!';
    if(player == 'semut')
        return ((comp == 'gajah') ? 'MENANG!' : 'KALAH!');
    if(player == 'orang')
        return ((comp == 'semut') ? 'MENANG!' : 'KALAH!');
    if(player == 'gajah')
        return ((comp == 'orang') ? 'MENANG!' : 'KALAH!');
}

function putar(){
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - timeStart > 1000){
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length)
            i = 0;
    }, 100);
}

let Win = 1, Lose = 1;
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComp = pComp();
        const pilihanPlayer = pil.className;
        const hasil = result(pilihanPlayer, pilihanComp);
        //console.log('hasil : ' + hasil);

        putar();
        setTimeout(function(){
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            const skorComp = document.querySelector('.skorComp');
            const skorPlayer = document.querySelector('.skorPemain');
            if(hasil == 'MENANG!'){
                skorPlayer.innerHTML = Win++;
                alert('Player Win');
            }
            if(hasil == 'KALAH!'){
                skorComp.innerHTML = Lose++;
                alert('Computer Win');
            }
        }, 1000);
    });
});

document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
});