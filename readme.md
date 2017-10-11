Hello

This is a javascript clock that I made in my free time. I decided to push this to git
incase anyone needs the code in the future.

used express and node in ubuntu to make this.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
if you do not use node, simply take the code from views/index.ejs(to be placed in the body)
and assets/script.js and style it how you wish
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
layout explanation: 
    
    Format
    
    [file/folder]:
        [what it does/consists of]
    

    assets:
        styles.css:
            Optional - you can style it yourself if you'd like or use this file and edit it at your leisure
        script.js:
            Required - this is what gets the time and keeps the clock ticking.
    
    views:
        /partials:
            header.ejs:
                The top part of an html document, ends at the start of the body tag
            footer.ejs:
                The final part of an html document, starts at the end of the body tag
        index.ejs:
                The main elements used to form/hold the clock and whiteboard.
    
    app.js:
        main file that node uses to start 
        
    package.json:
        json config file