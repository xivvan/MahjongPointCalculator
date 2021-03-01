const form = document.querySelector('.conditions');
const paragraph = document.querySelector('.result');
const riichi = document.querySelector('.riichi > input:nth-child(1)');




riichi.addEventListener('click', e => {
    document.querySelector('.music').play();
});





const titleCalculator = (han, fu, dealer) => {
    let title = '' || 'Good job';
    let savedPoints = han * 1000;
    let points = han * 1000;
    let fixed = undefined;
    
    if(han === 4 && fu >= 40){
        title = 'Mangan';
        points = 8000;
        if(dealer){
        points *= 1.5;
        }
        fixed = true;
    } else if(han === 3 && fu >= 70){
        title = 'Mangan';
        points = 8000;
        if(dealer){
            points *= 1.5;
            }
            fixed = true;
    };
    if(han > 4 && han < 6){
        title = 'Mangan';
        points = 8000;
        if(dealer){
            points = points * 1.5;
            }
            fixed = true;
    } else if(han > 5 && han < 8){
        title = 'Haneman';
        points = 12000;
        if(dealer){
            points = points * 1.5;
            }
            fixed = true;
    } else if(han > 7 && han < 11){
        title = 'Baiman';
        points = 16000;
        if(dealer){
            points = points * 1.5;
            } 
            fixed = true;
    } else if(han > 10 && han < 13){
        title = 'Sanbaiman';
        points = 24000;
        if(dealer){
            points = points * 1.5;
            }
            fixed = true;
    } else if(han > 12){
        title = 'Kazoe-yakuman';
        points = 32000;
        if(dealer){
            points = points * 1.5;
            }
            fixed = true;
    };
   
    let pointCalc = Math.floor(savedPoints / 3);
    let dealerPay = Math.floor(pointCalc * 1.5);
    let dealerReward = Math.floor((savedPoints * 1.5) / 3);
    let toPay = Math.floor((savedPoints - dealerPay) / 3);






    



    form.val15.value == 'dealer' && form.val4.value == 'Tsumo' ? document.querySelector('.calculate-points').textContent = `You are the dealer! Everyone will pay you ${dealerReward} points!`:
    form.val4.value == 'Tsumo' && form.val15.value == 'No-dealer' ? document.querySelector('.calculate-points').textContent = `Everyone will pay you ${toPay} each, the dealer will pay ${dealerPay}.`:
    form.val3.value == 'Ron' && form.val15.value == 'No-dealer' ? document.querySelector('.calculate-points').textContent = `Ron! The person who discarded your winning piece pays ${points}, dealer pays: ${points * 1.5}`:
    form.val3.value == 'Ron' && form.val15.value == 'dealer' ? document.querySelector('.calculate-points').textContent = `Ron! You're the dealer! The person who discarded your winning piece pays you ${points * 1.5}`: alert('You must call Ron or Tsumo to finish a hand.');
    

    if(dealer && fixed){
    paragraph.textContent = `Result: You have ${points} points, for a total of ${han} han and ${fu} fu, ${title}! (1.5x dealer bonus!)`;
    }else if(dealer && !fixed){
    paragraph.textContent = `Result: You have ${points * 1.5} points, for a total of ${han} han and ${fu} fu, ${title}! (1.5x dealer bonus!)`;
    } else {
    paragraph.textContent = `Result: You have ${points} points, for a total of ${han} han and ${fu} fu, ${title}!`;
    }
    
};


form.addEventListener('submit', e => {
    e.preventDefault();
    const userConditions = [form.val1.value, form.val2.value, form.val3.value, form.val4.value, form.val5.value, form.val6.value, form.val7.value, form.val8.value, form.val9.value, form.val10.value, form.val11.value, form.val12.value, form.val13.value, form.val14.value];
    let han = 0;
    let fu = 0;
    let dealer = undefined;
    for(let i = 0; i < userConditions.length; i++){
        userConditions[i] === 'Riichi' ? han ++: 
        userConditions[i] === 'Ippatsu' ? han++:
        userConditions[i] === 'doubleriichi' ? han += 2:
        userConditions[i] === 'wind' ? han++:
        userConditions[i] === 'last-tile' ? han++:
        'Something\'s wrong';
        
    }
    if(form.val5.value){
    han = han += Number(form.val5.value);
    };
    if(form.val6.value){
    han = han += Number(form.val6.value);
    console.log(han);
    };
    if(form.val14.value) {
        fu += Number(form.val14.value) * 16;
    };
    if(form.val13.value){
        fu += Number(form.val13.value) * 8;
    };
    if(form.val12.value) {
        fu += Number(form.val14.value) * 4;
    };
    if(form.val11.value){
        fu += Number(form.val13.value) * 2;
    };

   if(form.val15.value == 'dealer'){
    dealer = true;
   }

   if(han === 0){
    
    alert('Fatal: Please pick a valid hand.');
    return `Could not form a valid hand.`;
    }
    titleCalculator(han, fu, dealer);
    form.reset();
});


