const mobileMenuEvent = ( ) => {
    document.querySelector( '#mobile-checkbox' ).addEventListener( 'change', ( e ) => {
        if ( document.querySelector( '.menu-mobile' ).classList.contains( 'menu-mobile-active' ) ) {
            if ( window.scrollY <= 100 ) {
                document.querySelector( ".container__header" ).classList.remove( "header-bg-visible" )
            }
        } else {
            if ( window.scrollY <= 100 ) {
                document.querySelector( ".container__header" ).classList.add( "header-bg-visible" )
            }
        }
        document.querySelector( '.menu-mobile' ).classList.toggle( 'menu-mobile-active' )
    } )
}

window.addEventListener( "scroll", ( ) => {
    if ( window.scrollY >= 100 ) {
        document.querySelector( ".container__header" ).classList.add( "header-bg-visible" )
    } else {
        if ( !document.querySelector( '.menu-mobile' ).classList.contains( 'menu-mobile-active' ) ) {
            document.querySelector( ".container__header" ).classList.remove( "header-bg-visible" )
        }

    }
    if ( window.scrollY >= 1000 ) {
        document.querySelector( '#btn-scroll' ).style.opacity = "1.0"
    } else {
        document.querySelector( '#btn-scroll' ).style.opacity = "0"
    }
} )

window.addEventListener( "load", ( ) => {
    if ( window.scrollY >= 100 ) {
        document.querySelector( ".container__header" ).classList.add( "header-bg-visible" )
    } else {
        document.querySelector( ".container__header" ).classList.remove( "header-bg-visible" )
    }
    mobileMenuEvent( );
    document.querySelector( '.loader-page' ).style.display = "none"
} )
