# GLITCHIFY

A React component that plays a glitch animation for any text that you enter.

**How To Use:**

```
import Glitchify from 'react-glitchify';

	const MyApp = () => {
		<ContainerComponent>
			<div>Some usual stupid stuff,
			follow by a super awesome animation !</div>
			<Glitchify>Show me the power of NPM.</Glitchify>
		</ContainerComponent>
	}
```

**You may also use the following options:**

* steps: The steps that the animation is divided by. More steps could result in a more prevalent distortion, but will also impact the performance more. (Value is a Number)
* fontSize: The size of the font. Please specify unit: px, em, rem, vw, vh...(Value is a string)
* color: The color of the text. Please specify the color with its unit. Hex colors preceded by an octothorpe ('#'), rgb colors using rgb( , , ), and so on... (Value is a string)
* font: choose any font you like. Specify a font as such: 'sans-serif'. (value must be a string)

**All those options should be passed as props. If none are specified, you will get a default of:**

* 20 steps
* 1rem fontSize
* black color
* sans-serif font

**How To Build From Source:**

*For Development:*
```
	npm run no-defaults
```

*For Production:*
```
	npm run build
```
_You may also just use the react component by copying Glitchify.jsx into your project and importing it from the directory you put it in._

**Get it on NPM:**

https://www.npmjs.com/package/react-glitchify