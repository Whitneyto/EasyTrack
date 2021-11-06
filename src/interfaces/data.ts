export interface Psample{
    name : string;
    data : string;
    comment: string;
    coated : Csample[];
}

export interface Csample{
    name : string;
    data : string;
    comment: string;
    pressed : Rsample[];
}

export interface Rsample{
    name : string;
    data : string;
    comment: string;
    heated : Xsample[];
}

export interface Xsample{
    name : string;
    data : string;
    comment: string;
}