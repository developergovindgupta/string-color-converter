# ColorConverter("color")

## How to use...

### View Demo

[gitHub link - download sourcecode](https://github.com/developergovindgupta/string-color-converter)

### How to install
    npm install string-color-converter

### html - js

    import ColorConverter from "string-color-converter";

### node:

    const ColorConverter = require('string-color-converter');
    
### syntax : 

    ColorConverter( strColorValue )


### output : 

    returns object having following read-only properties

<hr/>

| Property|	Description &lt; ColorObject &gt;|
|--|--|
|.name|	Name of color defined in css3|
|.rgb|	String rgb color value|
|.rgba|	String rgba color value|
|.hex|	String Hexa code of color|
|.hexa|	String Hexa code of color with alpha value|
|.hsl|	String HSL color|
|.hsla|	String HSL color with alpha value|
|.r|	Numeric Red Value|
|.g|	Numeric Green Value|
|.b|	Numeric Blue Value|
|.a|	Numeric Alpha Value Floating Point|
|.h|	Numeric Hue Value|
|.s|	Numeric Saturation Value|
|.l|	Numeric Lightness Value|
|.str|	String that is passed for conversion of color|
|.isValid|true if passed string is valid color string or valid html colorName.|

<hr/>

## Other Methods
This library have following methods 
    
    import ColorConverter, {hsv2hsl, hsl2hsv, rgb2hsl, hsl2rgb, hex2rgb, str2rgb, rgb2hex, rgba2hexa} from "string-color-converter";

|Method|Description|
|--|--|
|hsv2hsl|accept { hue, saturation, value} and return {hue, saturation, lightness}|
|hsl2hsv|accept {hue, saturation, lightness} and return { hue, saturation, value}|
|rgb2hsl|accept {red, green, blue} and return { hue, saturation, lightness}|
|hsl2rgb|accept { hue, saturation, lightness} and return {red, green, blue}|
|hex2rgb|accept #RRGGBB and return {red, green, blue}|
|str2rgb|accept string color value and return {red, green, blue}|
|rgb2hex|accept {red, green, blue} and return #RRGGBB|
|rgba2hexa|accept {red, green, blue, alpha} and return #RRGGBBAA|

<hr/>

## License : Free to use

## Author 
    developergovindgupta
    (Govind Prasad Gupta)
    email: govindprasadguptamca@gmail.com