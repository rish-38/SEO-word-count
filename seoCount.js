function showResult(){

    var metaTitle = document.getElementById('metaTitle').value;
    var metaDescription = document.getElementById('metaDescription').value;
    
    metaTitle = metaTitle.length;
    metaDescription = metaDescription.length;

    function titleResult(){
        
        if (metaTitle > 60){
        return "your meta title charcter count is " + metaTitle + " were it should be around 60." 
        }
        else if (metaTitle == 60){
        return "your meta title charcter count is " + metaTitle + " your meta title is perfect." 
        }
        else if(metaTitle == 0){
            return " you haven't written anything for you meta title."
        }
        else if (metaTitle < 60 && metaTitle>0){
        return "your meta title charcter count is " + metaTitle + " you have more space for title." 
        }
        else{
            return "there might be some error!"
        }
    }
    function descriptionResult(){
        if (metaDescription > 160){
        return "your meta Description charcter count is " + metaDescription + " were it should be around 60." 
        }
        else if (metaDescription == 160){
        return "your meta Description charcter count is " + metaDescription + " your meta title is perfect." 
        }
        else if(metaDescription == 0){
            return " you haven't written anything for you meta Description."
        }
        else if (metaDescription < 160 && metaDescription > 0){
        return "your meta Description charcter count is " + metaDescription + " you have more space for Description." 
        }
        else{
            return "there might be some error!"
        }
    }
    
    document.querySelector('#result').innerHTML = titleResult() +"<br>"+ descriptionResult();
}