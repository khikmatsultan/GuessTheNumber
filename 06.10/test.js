

let secret_num = 8;
let repeat = 0;


 while(true)
 {
    repeat ++;
    let user_num = Number(prompt("1 dan 20 gacha son kirit"));

    if (user_num > 20  )
    {
        alert('Shartni qayta uqigin!')
    }
    else
    {
        if (secret_num == user_num)
        {
            alert(`Congratulation bro, you found ther Number )))  , ${repeat} urinishda`);
            break;

        }
        else
        {
            alert('Ogayni topolmading, yana harakat qil!');
        }
    }
 }

