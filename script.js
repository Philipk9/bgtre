let pl = document.querySelector('.pill-container');
        let buyMiles = document.querySelector('#bm');
        let giftMiles = document.querySelector('#gm');
        let transferMiles = document.querySelector('#tm');
        let multiplyMiles = document.querySelector('#mm');
        let reinstateMile = document.querySelector('#rm');
        const _BUYPOS = 237;
        const _GIFTPOS = 665;
        const _TRANSFERPOS = 1095;
        const _MULTIPLYPOS = 1528;
        const _REINSTATEPOS = 1972;
        const _ENDPOS = 2414;


        window.addEventListener('scroll', function(){
            if(window.pageYOffset > _BUYPOS) {
                pl.classList.add('pill-sticked');
            } else {
                pl.classList.remove('pill-sticked');
            }

            if(window.pageYOffset >= _BUYPOS && window.pageYOffset <= _GIFTPOS) {
                buyMiles.classList.add("pill-active");
                pl.scrollLeft = 0
            } else {
                buyMiles.classList.remove("pill-active");
            }


            if(window.pageYOffset >= _GIFTPOS && window.pageYOffset <= _TRANSFERPOS) {
                giftMiles.classList.add("pill-active");
                pl.scrollLeft = 53
            } else {
                giftMiles.classList.remove("pill-active");
            }


            if(window.pageYOffset >= _TRANSFERPOS && window.pageYOffset <= _MULTIPLYPOS) {
                transferMiles.classList.add("pill-active");
                pl.scrollLeft = 197;
            } else {
                transferMiles.classList.remove("pill-active");
            }

            if(window.pageYOffset >= _MULTIPLYPOS && window.pageYOffset <= _REINSTATEPOS) {
                multiplyMiles.classList.add("pill-active");
                pl.scrollLeft = 335;
            } else {
                multiplyMiles.classList.remove("pill-active");
            }

            if(window.pageYOffset >= _REINSTATEPOS && window.pageYOffset <= _ENDPOS) {
                reinstateMile.classList.add("pill-active");
                pl.scrollLeft = 395;
            } else {
                reinstateMile.classList.remove("pill-active");
            }

            if(window.pageYOffset > _ENDPOS) {
                pl.classList.add('relative');
            } else {
                pl.classList.remove('relative');
            }

        })


        buyMiles.addEventListener('click', function(){
            window.scrollTo(0, _BUYPOS + 2);
        })

        giftMiles.addEventListener('click', function(){
            window.scrollTo(0, _GIFTPOS + 2);
        })

        transferMiles.addEventListener('click', function(){
            window.scrollTo(0, _TRANSFERPOS + 2);
        })

        multiplyMiles.addEventListener('click', function(){
            window.scrollTo(0, _MULTIPLYPOS + 2);
        })

        reinstateMile.addEventListener('click', function(){
            window.scrollTo(0, _REINSTATEPOS + 2);
        })
