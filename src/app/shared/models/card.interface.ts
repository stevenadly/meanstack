export interface ICard {
    imgSrc: string,
    title: string,
    description: string,
    footerDescription: string,
    btnTxt: string,
    BtnFn: Function;
    // it wasn't at the interface but i added it to solve el.id undefined
    id?:string;
}