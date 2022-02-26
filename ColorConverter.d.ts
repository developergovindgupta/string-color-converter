export declare type ColorObject = {
    r: number;
    g: number;
    b: number;
    a: number;
    h: number;
    s: number;
    l: number;
    str: string;
    rgb: string;
    rgba: string;
    hsl: string;
    hsla: string;
    hex: string;
    hexa: string;
    name: string;
    isValid: boolean;
};
export declare const hsv2hsl: (h: number, s: number, v: number) => {
    h: number;
    s: number;
    l: number;
};
export declare const hsl2hsv: (h: number, s: number, l: number) => {
    h: number;
    s: number;
    v: number;
};
export declare const rgb2hsl: (r: number, g: number, b: number) => {
    h: number;
    s: number;
    l: number;
};
export declare const hsl2rgb: (h: number, s: number, l: number) => {
    r: number;
    g: number;
    b: number;
};
export declare const hex2rgb: (str: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const str2rgb: (str: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
} | null;
export declare const rgb2hex: (r: number, g: number, b: number) => string;
export declare const rgba2hexa: (r: number, g: number, b: number, a: number) => string;
/**
 * Convert string color value/name to object having properties
 * rgb,rgba,hex,hexa,red,gree,blue,alpha,hue,saturation,lightness etc.
 * @param strColor
 * @returns ColorObject
 */
declare const StringColorConverter: (strColor: string) => ColorObject;
export default StringColorConverter;
