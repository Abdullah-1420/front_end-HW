
let movie = {

    title : "Puff the Magic Dragon" ,
    duration : 30 ,
    stars : [ 'Puff', 'Jackie', 'Living Sneezes'],
    print : function(){
        console.log(`${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars.join()}.`);
    }
}

movie.print()