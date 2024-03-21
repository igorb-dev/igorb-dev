import * as React from "react";
import { SVGProps } from "react";

interface SvgEmailPropProps extends SVGProps<SVGSVGElement> {
  color?: string; // Adicione a propriedade de cor opcional
}

const SvgEmailProp = ({ color, ...props }: SvgEmailPropProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={60}
    height={60}
    fill={"color"} // Use a cor passada como propriedade
    {...props}
  >
    <path fill="url(#a)" d="M0 0h60v60H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbElEQVR4nO2avWsUQRjGzw9EEQU/CsHGwsZGEESw0kY7bbRTG0vttPAfUEhhI9goiga1iVZ22mwTl9t5n+HOEC1UCKIgKAhK8DM6MrAWBm9udm/2ZjZ5fvBCINmdnV9mZ2ee3U6HEEIIIYQQQgghhBBCCCGEBGRmZmYTgCcADAsuBwrA1pFk9/v99QAeUTQGSc6mp6c3BBnZs7OzawDcp2z8I1lEHmZZtrayUGPMikG/y7JsNYDblI2/km9NTU2tquOyIyJ3rFDXwQAuL3fZInLVGLNykCf7DwBwY6Bo39tBRC7E7izi1YTvNOsU7TvBAzgrIr+W0Sj+LSLnqiwcfETbE8uwJQuAEwB+xJaA5mtBKXW66lLYS3Qp+3mv19vuakBrfQTA1yU8kr8ppY65HBRFsU1Eni4+1lt02dCc1nqnqyEROQjg0xKUPC8ih1x97/V6O0Tk5f+OryS6rHda692uBrXWewF8WEKSP2qt9w/p8y4Abwado47oIA2jPRVkYNUSXcqeB3DY41Z60eKRPBdqqqwturyQ754Ph34LJT8L+fAfSfQoyx20PIGrupwNIbrWAh7pViMbtCCi62xJkWA1GTmEFu0dsiABsYuuu9EQLbjo8qLvtin5E7/BcXOUNhoR3bLkb2Ic011josvKut3uRldHAJyJkfyN+wHetOhUk78FnyWpiOSh2mxcdMXk70vKCVzyon23s0qpA00mf6MmcK0QHTv5E88gTETeNtH3cYs2kZK/6NHu2EVjzMlfKi8roohGmfyJyPEmk7/QCVwrRaP55M83gfs5jr7GFm3sxgHA+cAbh+Q+kYguGoG3wqlu/VMSbQBccX2nZsMdEbnukHxt2Ddwto0YfUtNtAEw6Ur+LEqpowAei8h7W3ZasQ811zHlh5mTsfqVomhjb/88z9d1AlFOOw9i9ilJ0fBM/nxI5RVayqINgCLP8811Jdtj7TkS6Efyog2A1yKyr6pkpdQeAK8SuP7WiDblzu2iz+guimKLiFxK7WPLtog2ZX227yO11idtSGS36Lbsz0qpUwDu2b9J4DpbL9q0tSgaFG1ij0KOaMQXx6kD8aVyjgZFm9gjjiMa8SVx6kB8gZyjkVZxwwKKNrFHIUc04ovj1IH4UjlHI0HRhBBCCCGEEEIIIYQQQgghpDOcP6IWwFpX6HavAAAAAElFTkSuQmCC"
        id="b"
        width={90}
        height={90}
      />
    </defs>
  </svg>
);

export default SvgEmailProp;
