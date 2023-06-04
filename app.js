let p = $('#test');
let div = $('.my-class');
let ul = $('ul');
console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text('New Text')
$('input').attr('placeholder', 'placeholder Text');

div.prepend('<p>prepended paragraph</p>');
div.append('<p>appended paragraph</p>');
div.before('<p>paragraph that was added before the div</p>');
div.after('<p>paragraph added after the  div</p>');

div.empty();
div.remove();

$('input').hide();
setTimeout(() => $('input').show(), 2000);

