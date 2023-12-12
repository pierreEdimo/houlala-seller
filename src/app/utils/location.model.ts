export type LocationModel = {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    country: Country;
    telephoneNumber: string;
    email: string;
    website: string;
    uniqueIdentifier: string;
    imageUrl: string;
    orderTotalCount: number;
    orderCanceledCount: number;
    productTotalCount: number;
    orderSoldCount: number;
    creator: Owner;
    address: Address

}

type Country = {
    id: number;
    name: string;
    code: string;
}

type Address = {
    id: number;
    city: string;
    streetName: string;
    poBox: string;
}

type Owner = {
    id: string;
    email: string;
    lastName: string;
    firstName: string;
}
