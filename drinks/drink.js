

function bottegaClick(onclick1) {
    if (document.getElementById(onclick1).style.display == 'none') {
        document.getElementById(onclick1).style.display = 'block';
    } else {
        document.getElementById(onclick1).style.display = 'none';
    }
}



bottegaClick(onclick1)

function birra1Click(birre) {
    if (document.getElementById(birre).style.display == 'none') {
        document.getElementById(birre).style.display = 'block';
    } else {
        document.getElementById(birre).style.display = 'none';
    }
}



birra1Click(birre)


function drink1Click(Drinks, birre) {
    if (document.getElementById(Drinks).style.display == 'none') {
        document.getElementById(Drinks).style.display = 'block';
    }
    else if (document.getElementById(birre).style.display = 'block') {
        document.getElementById(birre).style.display = 'none';
        document.getElementById(Drinks).style.display = 'block';
        return (document.getElementById(Drinks).style.display = 'none')
    } else if (document.getElementById(Drinks).style.display == 'block') {
        document.getElementById(Drinks).style.display = 'none';
        document.getElementById(birre).style.display = 'block';
    }
}

drink1Click(Drinks, birre)


