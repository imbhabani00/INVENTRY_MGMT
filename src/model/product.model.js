export default class ProductModel {
    constructor(_id, _name, _desc, _price, _author, _imgUrl) {
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.author = _author;
        this._imgUrl = _imgUrl;

    }
    static get() {
        return products;
    }
}
var products = [

    new ProductModel('1', 'Atomic habbit', 'A supremly practical and usefull Book.', '199', 'James Clear.', 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('2', 'The Lord Of The Rings.', 'Literary reception of The Lord.', '299', 'John Ronald Reuel Tolkien.', 'https://m.media-amazon.com/images/I/A107128OO2L._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('3', 'Arbian nights.', 'Fturistic dystopian novel.', '399', 'Margaret Atwood.', 'https://m.media-amazon.com/images/I/61N-B3AyATL._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('4', 'GoodNight.', 'Novel.', '499', 'Harper Lee.', 'https://m.media-amazon.com/images/I/61L5e-4AqHL._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('5', 'Little Women.', 'coming-of-age novel.', '599', 'Louisa May Alcott.', 'https://m.media-amazon.com/images/I/91fsS3PJuUL._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('6', 'Fairytales.', 'Debut novel.', '699', 'Chinua Achebe.', 'https://m.media-amazon.com/images/I/618Rz4vXJFL._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('7', 'Panchatantra', 'Story', '799', 'Miguel de Cervantes.', 'https://m.media-amazon.com/images/I/61LlxZVhHoL._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('8', 'Masters Your  Imotion', 'Emotions.', '899', 'Miguel de Cervantes.', 'https://m.media-amazon.com/images/I/81BgEsl0SJL._AC_UY327_FMwebp_QL65_.jpg'),

    new ProductModel('9', 'Brain games for kids', 'Brain games.', '999', 'Joseph Heller.', 'https://m.media-amazon.com/images/I/91m48dt3o0L._AC_UY327_QL65_.jpg'),

    new ProductModel('10', 'Activites For Kids', 'Activites Of Kids.', '1099', 'JKurt Vonnegut.', 'https://m.media-amazon.com/images/I/818SV2bqBhL._AC_UY327_QL65_.jpg'),

]
