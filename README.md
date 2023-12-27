# Frontend Mentor - Rock, Paper, Scissors solution

![Design preview for the Rock, Paper, Scissors coding challenge](./public/desktop-preview.jpg)

## Welcome!
Thanks  for checking out this front-end coding challenge.
[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects
**To take on this challenge, you'll need a basic understanding of HTML, CSS, JavaScript, and a bit of knowledge in React.js, along with familiarity with Tailwind CSS will be god idea**

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Rules 

If the player wins, they gain 1 point. if the computer wins, the player loses one point.

### original

- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [TypeScript](https://www.typescriptlang.org/) - supersets

### What I learned

I implemented Recoil and found it to be much simpler compared to React Context. 
The only thing i had to do was...
```javascript
import { atom } from 'recoil'


export const counterState = atom({
  key: 'counterState',
  default: 0
})
```
The next thing i did was wrap it in `Layout.tsx`
```javascript
  <html lang="en">
    <body className='font-barlow-semi-condensed'>
      <RecoilRoot>
      <div
        className="
          bg-gradient-to-b 
          from-background-radial-gradient-start 
          to-background-radial-gradient-end
          min-h-screen
          text-white
          h-full
          p-8
          flex
          flex-col
          justify-between
          gap-6
        "
      >
        <Header />
          {children}
        <Footer />
      </div>
      </RecoilRoot>
    </body>
  </html>
```
Just by doing that, I was ready to start working with it.

### Continued development

Later, when implementing authentication in this project, would it be a good idea to incorporate Socket.IO for creating a ***real-time*** game

### Useful resources

- [Reactjs](https://react.dev/) - I find myself coming to this site often, it's really helpful, when i'm working with React.

## Author

- Website - [Alfredo](https://www.fernandezalfredo.com)
- Frontend Mentor - [@addier94](https://www.frontendmentor.io/profile/addier94)
- Twitter - [@addier94](https://twitter.com/addier94)

## Acknowledgments

It was a solo effort, and I appreciate the opportunity to independently design and implement each aspect of the application
