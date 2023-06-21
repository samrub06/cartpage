Container

width:  100%
heigth : 100%

Image

width: 100%; /* Définit la largeur de l'image à 100% de son conteneur */
height: auto; /* Permet de conserver le ratio hauteur/largeur de l'image */
border-radius: 8px; /* Ajoute des coins arrondis à l'image */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ajoute une ombre à l'image */



DISPLAY: change the default way something displays
        display: block (by default) => list item display one below the other
        display: inline => list item display next to each other 
        display:flex => flex-direction: row  (by default)
                        align-items: stretch (by default)
                        flex: 1 (by default) will cause all of the items to grow and fill the container, rather than leaving space at the end.
        display: Grid

FLOATS
POSITION : 
        static: normal position
        relative: allow to modify an element position
        absolute: move an eleemnt completely out of the page's normal layout flow
        fixed : is very similar to absolute positioning except that it fixes an element relative to the browser viewport or another element 
        ex: 
            - useful for persistent navigation menu
            -popup information boxes, control menus, rollover panels, UI features that can be dragged and dropped anywhere on the page, and so on.
        
        sticky: it'll scroll in normal flow until it hits offsets from the viewport that we have defined. At that point, it becomes "stuck" as if it had position: fixed applied.


FLEX : 

    flex: 20px means each of the box will be at least 200px wide
    flex: 1 50px; means unitless proportion value that dictates how much available space along the main axis each flex item will take up compared to other flex items + 50px minimum space at least it's taken 

ALIGN-ITEMS: controls where the flex items sit on the cross axis

align-items: strech (by default )

ALIGN-SELF
JUSTIFY-CONTENT: controls where the flex items sit on the main axis.


shorthand:

1)
flex-direction: row
flex-wrap: wrap
____________________
flex-flow: row wrap