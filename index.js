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

}

document.addEventListener("DOMContentLoaded", function() {  
    var c = document.getElementById('cart');
    var mc = document.getElementById('mycart');
    
    c.addEventListener('click', function() {
        mc.classList.toggle('dn');
    })
    
    window.addEventListener('click', function(e) {
        if (!mc.classList.contains('dn') && e.target != mc) {
        mc.classList.add('dn');
}
});
  });


