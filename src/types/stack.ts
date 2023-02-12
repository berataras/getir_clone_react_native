export type HomeStackParamList = {
    Home: undefined;
    Category: {
        category: {
            id: any,
            name: string
        }
    };

    ProductDetails: {
        product: {
            id: any,
            name: string,
            price: number,
            discountPrice: number,
            image: string,
            images: Array<string>
            amount: string
        }
    }
};
