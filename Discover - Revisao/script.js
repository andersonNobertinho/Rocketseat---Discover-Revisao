function toggleMode(){
    const html = document.documentElement

    // podemos fazer de duas formas ou fazemos dessa forma que está comentada ou utilizamos a função toggle
    
    //     if(html.classList.contains('light')){
        //         html.classList.remove('light')
        //     }else{
            //         html.classList.add('light')
            //     }
            html.classList.toggle('light')
            
            const img = document.querySelector("#profile img")
            if(html.classList.contains('light')){
                img.setAttribute("src", "./assets/avatar-light.png")
                img.setAttribute("alt", "Imagem redonda de um homem de óculos com camisa vermelha")
            }else{
                img.setAttribute("src", "./assets/avatar.png")
                img.setAttribute("alt", "Imagem redonda de um homem sem óculos com camisa azul")
            }
        }