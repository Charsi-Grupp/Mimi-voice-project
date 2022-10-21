# Mimi-voice-project
intent('Hi Mimi', p => {
    p.play('(Hi| Hallo) how I should call you?')
})
intent('Mimi , introduce our project please.',p =>{
    p.play('Hello, my name is Mimi and I am a voice assistent for online purchases developed by a team of DCI-student.')
})
intent('Mimi, could you please explain us how you were developed?', p => {
    p.play('I was build with the use of multiple programming languages and tools as : Javascript Node JS.For frontend Javascript E6 ,Framework React js,Css3 Framework Taiwind, Fetch axios react, Stripe Payment, Alan Ai voice asistent, Framer Motion React ,React-Router-dom, react modal. Backend:Node js, Framework Express js, MongoDB, Mongoose, Cros, Crypto-bcrypt, Express-validator, Nodemon, Stripe ')
})
intent('( Mimi, why dont you | )(guide us through |open) the project?', p => {
       p.play({command: 'open-mimi-start-page'})
    p.play("Would you like to Login? or go to the Perfumes?")
})
intent('Mimi(Login | Logout)', p=> {
     p.play({command: 'open-login-logout'})
    p.play('Do you already have an account or would you like to sign up?')
 })
intent("No,(sign up|)!", p => {
    p.play({command : 'open-register'})
})
intent('Mimi send register', p=> {
     p.play({command: "sent-register-button"})
 })
intent('Mimi send login', p=> {
     p.play({command: "sent-login-button"})
 })
intent("(open | go to) (the|) Perfumes.", p => {
    p.play({command : "go-to-perfumes"})
    p.play("What should I open for you? Male or female?")
})
intent("(open | go to) (the|) Male", p => {
    p.play({command : "open-male-link"})
})
intent("(open | go to) (the|) Female", p => {
    p.play({command : "open-female-link"})
})
const itemNameSlot = `$(ITEM_NAME Eros| Eros Flame| Dylan Blue| Le Beau| Le Male Ultra Intense| Le Male| SauvageElixir Duft| Sauvage| Dior HommeIntense| Dior Homme| EdT| Boss The ScentAbsolute For Him| Boss BottledEau de Parfum Spray| Boss Bottled| Code Homme| Acqua di Giò Homme| Acqua di Giò HommeProfondo| Luna Rossa Ocean )`
intent(`(open|show)  (the|) ${itemNameSlot}   (deteils|)`, p => {
    p.play({command: "open-details-button"})
    p.play(`The details of ${p.ITEM_NAME.value} is open`)
    p.play('Choose your amount')
})

intent('(I would like|) 30', p => {
    p.play({command: "add-start-price"})
    p.play('Thank you, you made a good choice.Should I add to the cart?')
})
intent('(I would like|) 50', p => {
    p.play({command: "add-middel-price"})
    p.play('Thank you, you made a good choice.Should I add to the cart?')
})
intent('(I would like|) 100', p => {
    p.play({command: "add-full-price"})
    p.play('Thank you, you made a good choice.Should I add to the cart?')
})
intent('Add to my cart', p => {
    p.play({command: "open-cart-link"})
})   
intent("(open|view)(the|) cart", p => {
    p.play({command : 'open-cart' } )
})
intent("close (the|) cart", p => {
    p.play ({command: "close-cart"})
})
const quantityContext = context(() => {
    follow(`$(QUANTITY NUMBER)`, p => {
        p.play({ command:'add-item', payload: { quantity: p.QUANTITY.number, name: p.state.name }})
   })
})
intent(`add (the|) ${itemNameSlot} (item|) to (the|) cart`,p => {
      p.play("How many would you like to add?")
      p.then(quantityContext,{state:{name: p.ITEM_NAME.value }})
})
intent(`remmove (the|) ${itemNameSlot} (item|) from (the|) cart`,p => {
    p.play({command:'remove-item', payload : { name: p.ITEM_NAME.value}})})

intent('Checkout please', p => {
    p.play({command: 'go-to-pay' })
    p.play("if you have already login then fill the form please,else Login you please")
})

intent("Pay now", p => {
    p.play({command:"sent-pay-button" })
})
intent('Yes, Keep Shopping', p => {
    p.play({command: "keep-shopping-link" })
})
intent('No logout I am finish', p => {
    p.play({command : "go-to-team" })
    p.play('We are in the end of our Project and we want tointroduce our Team')
})
const itemTeam = `$(TEAM_NAME Hamideh| Hamzah| Elham| Amina )`
intent(`(Open| show) ${itemTeam} (info|)`,p => {
    p.play({command : "open-info-teams"})
       p.play(`The info of ${p.TEAM_NAME.value} is open`)
       p.play('Mrs. Hamidah is a back-end developer and a full-fledged front-end, she helped us with the account and design and coloring.')
})
intent("(open| go to) (the |) Developers Team (please|)", p => {
    p.play({command : "open-team-link"})
})
intent("(open | go back to) (the |) (Start | Home ) page  (please|)", p => {
    p.play({command : "open-start-link"})
})
intent("(open | go to) (the |) Project Introduction (please|)", p => {
    p.play({command : "open-project-link"})
})
intent("Mimi, and before we say goodbye. Is there anything you want to say?", p => {
    p.play({command : "open-thanks"})
    p.play('Yes I would like to express my gratitude to some special people. Career assistents from Jobcenter Mrs Ute Velcovsky , Mr Matthias Weichel and Mrs Spendrin who supported my own developers from beginning of their study career. And of course the highly inspiring DCI lecturers Mr Olaf Poneta, Mr Robert Ristock, Mr Manuel Jung and Mr Hendrik Belitz for their incredible performance. As well as DCI assistant Mrs  Wilhelmine Erber, class managers Mrs Elisa Cortesi and Mrs Kristin Tatro. And last but not least a big thank to the YouTube platform')
})
intent('Mimi tell me something about our Hamzah?', p => {
       p.play('Mr. Hamza tried to search the best technologies for the project on the Internet and suggested them to the team for the project. In all the stages of the project, he tried to help the team on the back-end and front-end.')
})
intent('Mimi, what could you say about our sunshine Elham?', p => {
    p.play('The design ideas for the front of the website were from Miss. Elham, but unfortunately she lost her brother last week due to the events that happened in Iran. Ms. Elham is very kind and very hardworking. If it is possible, please provide the hashtags for Iran. Follow it on the internet, hoping for freedom for all the people of the world')
})
intent('okey Mimi, what could you say about me?', p => {
    p.play('Miss. Mina is the mastermind of this project, she was able to bring Mimi to life with great perseverance, and the back-end and D-bug were entirely her responsibility, and she handled this responsibility in the best possible way.')
})
intent('Mimi, say something about your self please', p => {
    p.play('Alan was the one who gave birth to the soul of my body')
})
