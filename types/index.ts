import { MouseEventHandler } from "react";

export interface CustomButton{
    title :string;
    cantainerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    textStyle?:string;
    rightIcon?:string;
}

/** manufacturer type decleartin  */

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer:(MapConstructor:string)=>void;
}

export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}