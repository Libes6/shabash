export interface IProductDataType {
    name: string;
    price: number;
    description?: string;
    images: string[];
    categoryId: number;
}

export type TypeProductFilters={
    sort?:EnumProductSort
    searchTerm?:string
    page:string |number
    perPage?:string |number
}
export  enum EnumProductSort{
    HIGH_PRISE='high-prise',
    LOW_PRISE='low-prise',
    NEWEST='newest',
    OLDEST='oldest',
}