function openOrCloseNav(e){
    let menuBtn = document.getElementById('navMenu')
    if(menuBtn.classList.contains('closed')){   
        menuBtn.classList.remove('closed');
        menuBtn.classList.add('opened');
    }
    else if(menuBtn.classList.contains('opened')){
        menuBtn.classList.remove('opened');
        menuBtn.classList.add('closed');
    }
}

// function openOrCloseMarmaros(e){
//     // if(e.target.id != 'stopPropagMarmaros'){return}
//     // e.stopPropagation()
//     let menuBtn = document.getElementById('navMarmarosLinks')
//     if(menuBtn.classList.contains('navMarmarosClosed')){   
//         menuBtn.classList.remove('navMarmarosClosed');
//         menuBtn.classList.add('navMarmarosOpened');
//     }
//     else if(menuBtn.classList.contains('navMarmarosOpened')){
//         menuBtn.classList.remove('navMarmarosOpened');
//         menuBtn.classList.add('navMarmarosClosed');
//     }
// }

// function openMarmaros(){
//     let menuBtn = document.getElementById('navMarmarosLinks')
//     if(menuBtn.classList.contains('navMarmarosClosed')){   
//         menuBtn.classList.remove('navMarmarosClosed');
//         menuBtn.classList.add('navMarmarosOpened');
//     }
// }
// function closeMarmaros(e){
//     e.stopPropagation();
//     let menuBtn = document.getElementById('navMarmarosLinks')
//     if(menuBtn.classList.contains('navMarmarosOpened')){
//         menuBtn.classList.remove('navMarmarosOpened');
//         menuBtn.classList.add('navMarmarosClosed');
//     }
// }