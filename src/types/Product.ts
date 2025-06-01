export default interface Product {
    name: string,
    category: { name: string }
    price: number,
    isFavorite: boolean,
    image: string
}