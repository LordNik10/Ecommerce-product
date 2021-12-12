function increment()
{
    var n = document.getElementById('amount');
    n.value++;
}

function decrement()
{
    var n = document.getElementById('amount');
    if (n.value==0)
    {
        n.value=0;
    }
    else
    {
        n.value--;
    }
    
}

function additem()
{
    var cart = document.getElementById('items');
    var itcart = document.getElementById('itemcart')
    var it = document.getElementById('amount');
    if (it.value!=0)
    {
        itcart.textContent = document.getElementById('amount').value;
        cart.style.display='block';
    }
    else
    {
        itcart.textContent = 0;
        cart.style.display='none';
    }
    /*var cartbody = document.getElementById('mycartbody');
    if (cartbody.textContent=='Your cart is empty')
    {

    }*/

}

var imm = new Array();
var t = 1;
function next()
{
    var image = document.getElementById('imageproduct1')
    t++;
    if (t>=4)
    {
        t=4;
    }
    switch(t)
    {
        case 1 :
            image.src="./images/image-product-1.jpg";
            break;
        case 2 :
            image.src="./images/image-product-2.jpg";
            break;
        case 3 :
            image.src="./images/image-product-3.jpg";
            break;
        case 4 :
            image.src="./images/image-product-4.jpg";
            break;
    }
}

function prev()
{
    var image = document.getElementById('imageproduct1')
    t--;
    if (t<=0)
    {
        t=0;
    }
    switch(t)
    {
        case 1 :
            image.src="./images/image-product-1.jpg";
            break;
        case 2 :
            image.src="./images/image-product-2.jpg";
            break;
        case 3 :
            image.src="./images/image-product-3.jpg";
            break;
        case 4 :
            image.src="./images/image-product-4.jpg";
            break;
    }
}

function clickimg(obj)
{
    var t1 = document.getElementById('image-product-1-thumbnail');
    var t2 = document.getElementById('image-product-2-thumbnail');
    var t3 = document.getElementById('image-product-3-thumbnail');
    var t4 = document.getElementById('image-product-4-thumbnail');
    var o = document.getElementById(obj.id);
    t1.style.border='none';
    t1.style.opacity='1';

    t2.style.border='none';
    t2.style.opacity='1';

    t3.style.border='none';
    t3.style.opacity='1';

    t4.style.border='none';
    t4.style.opacity='1';

    o.style.border='3px solid #FF7E1B';
    o.style.opacity='0.6';

    var s = document.getElementById(obj.id).src;
    var im = document.getElementById('imageproduct1');

    switch(obj.id)
    {
        case "image-product-1-thumbnail" :
            im.src="./images/image-product-1.jpg";
            break;
        case "image-product-2-thumbnail" :
            im.src="./images/image-product-2.jpg";
            break;
        case "image-product-3-thumbnail" :
            im.src="./images/image-product-3.jpg";
            break;
        case "image-product-4-thumbnail" :
            im.src="./images/image-product-4.jpg";
            break;
    }
}

function closemenu()
{
    var mm = document.getElementById('menu');
    var bd = document.getElementById('bdy');
    mm.style.opacity='0';
    mm.style.left='-320px';
    console.log('chiudo prima');
    bd.classList.remove('op');
    console.log('chiudo dopo');
}

function deletecart()
{
    document.getElementById('mycartempty').style.display='block';
    document.getElementById('mycartbody').style.display='none';
    document.getElementById('checkout').style.display='none';
    document.getElementById('items').style.display='none';
}

document.addEventListener("DOMContentLoaded", function() {  
    var c = document.getElementById('cart');
    var mc = document.getElementById('mycart');
    var mh = document.getElementById('menuhamb');
    mc.style.opacity='0';
    //apre carrello
    c.addEventListener('click', function() {
        /*mc.classList.toggle('dn');*/
        if (mc.style.opacity=='0')
        {
            if (mh.style.display=='none')
            {
                console.log('if1');
                mc.style.opacity='1';
                mc.style.top='120px';
            }
            else
            {
                console.log('if1 mobile');
                mc.style.opacity='1';
                mc.style.top='160px';
            }
            
        }
        else
        {
            if (mh.style.display=='none')
            {
                console.log('if2');
                mc.style.opacity='0';
                mc.style.top='0'; 
            }
            else
            {
                console.log('if2 mobile');
                mc.style.opacity='0';
                mc.style.top='110px';
            }
            
        }      
        var itcart = document.getElementById('itemcart');
        if (itcart.textContent=='0')
        {
            document.getElementById('mycartempty').style.display='block'
            document.getElementById('mycartbody').style.display='none';
            document.getElementById('checkout').style.display='none';
        }
        else
        {
            document.getElementById('mycartbody').style.display='flex';
            document.getElementById('checkout').style.display='block';
            document.getElementById('mycartempty').style.display='none';
        }

    })
    var mm = document.getElementById('menu');
    var bd = document.getElementById('bdy');
    if (mh.style.display!='none')
    {
        mm.style.opacity='0';
    }
    
    //apre menu mobile
    mh.addEventListener('click', function() {
        
        if (mm.style.opacity=='0')
        {
            bd.classList.toggle('op');
            mm.style.opacity='1';
            mm.style.left='0';
            
        }
    })
        
    //chiude carrello
    window.addEventListener('click', function(e) {
        if (mc.style.opacity='1' && e.target != c && e.target != mc && e.target.parentElement.id != 'mycart' && e.target.id!='img-product1' && e.target.id!='mycarttext' && e.target.id!='delete') {
            if (mh.style.display=='none')
            {
                mc.style.opacity='0';
                mc.style.top='0';  
            }
            else
            {
                mc.style.opacity='0';
                mc.style.top='110px'; 
            }
            
        }
    });

    //Chiude menu mobile
    var cl = document.getElementById('close');
    window.addEventListener('click', function(e) {
        if (mm.style.opacity='1' && e.target != mm && e.target != 'menu' && e.target.id!='ul' && e.target.id!='il' && e.target!=mh && e.target!=cl && e.target.classList!='ahref') {

                mm.style.opacity='0';
                mm.style.left='-320px';
                bd.classList.remove('op');
            
            
            
        }
    });

    
});


