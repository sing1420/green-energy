    // Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "./img/wind.jpeg",
           "./img/hydro.jpeg",
           "./img/biomass.jpeg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */

    const buttons = document.querySelectorAll('button');
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const resource = [
        {
            headingContent: "Wind Energy",
            imgUrl: "./img/wind.jpeg",
            imgAlt: 'Wind Energy image',
            bodyText: "Wind Energy alludes to the way toward making power utilizing the breeze, or wind currents that happen normally in the world's climate. Present day wind turbines are utilized to catch active vitality from the breeze and produce power."
        },

        
        {
            headingContent: "Hydro Energy",
            imgUrl: "./img/hydro.jpeg",
            imgAlt: 'Hydro Energy image',
            bodyText: "Hydroelectricity is the utilization of hydropower to produce power. It is the essential utilization of hydropower today. Hydroelectric force plants can incorporate a supply (for the most part made by a dam) to abuse the vitality of falling water, or can utilize the dynamic vitality of water as in run-of-the-stream hydroelectricity."
        },



        {
            headingContent: "Biomass Energy",
            imgUrl: "./img/biomass.jpeg",
            imgAlt: 'Biomass Energyl image',
            bodyText: "Biomass is natural material that originates from plants and creatures, and it is an inexhaustible wellspring of vitality. Biomass contains put away vitality from the sun. Plants retain the sun's vitality in a procedure called photosynthesis. At the point when biomass is singed, the concoction vitality in biomass is discharged as warmth."
        }
    ];

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const container = document.querySelector('.new-content');
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
    function handleSelection(event){
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        for (let button of buttons){
            if(button.hasAttribute('id')){
                button.removeAttribute('id');
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */

        event.target.setAttribute('id', 'active-button');

        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 

        if (event.target.innerText == "Wind Energy") {
            container.innerHTML = `<h3>${resource[0].headingContent}</h3>
                <img id="first" src="${resource[0].imgUrl}" alt="${resource[0].imgAlt}">
                <p id="second">${resource[0].bodyText}</p>`;
        }else if(event.target.innerText == "Hydro Energy"){
            container.innerHTML = `<h3>${resource[1].headingContent}</h3>
                <img id="first" src="${resource[1].imgUrl}" alt="${resource[1].imgAlt}">
                <p id="second">${resource[1].bodyText}</p>`;
            }else if(event.target.innerText == "Biomass Energy"){
            container.innerHTML = `<h3>${resource[2].headingContent}</h3>
                <img id="first" src="${resource[2].imgUrl}" alt="${resource[2].imgAlt}">
                <p id="second">${resource[2].bodyText}</p>`;
        }
    
    /* 
    Close your handleSelection function here. */  
    
    }

    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  

    for (let button of buttons){
        button.addEventListener('click', handleSelection);
    }