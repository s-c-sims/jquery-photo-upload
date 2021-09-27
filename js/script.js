$(function() 
{
    
    let image = $('img');
    
    $('#upload').change( (e) =>
    {
 
        image.attr('src', URL.createObjectURL(e.target.files[0]));
        

    });
    

});
