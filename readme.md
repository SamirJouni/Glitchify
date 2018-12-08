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

**All those options should be passed as props. If none are specified, you will get a default of:**

* 20 steps
* 1rem fontSize
* black color

**The component has the following dependencies:**

* react
* styled-components