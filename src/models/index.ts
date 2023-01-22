export declare class IProduct {
    readonly id: string;
    readonly image: string;
    readonly images: string[];
    readonly name: string;
    readonly miktar: string;
    readonly fiyat: number;
    readonly fiyatIndirimli?: number;

}

export declare class ICategory {
    readonly id?: string;
    readonly name: string;
    readonly src: string;
    readonly subCategories?: string[];
}

export declare class IFiltering {
    readonly id: string;
    readonly name: string;
}
