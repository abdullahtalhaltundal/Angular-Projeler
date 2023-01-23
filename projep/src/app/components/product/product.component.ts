import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [
    {
      name: 'Domates',
      price: 29.99,
      imageUrl: 'https://st2.myideasoft.com/idea/ad/25/myassets/products/210/domates-ne-kadar.jpg?revision=1634649401',
    },
    {
      name: 'Salatalık',
      price: 19.99,
      imageUrl:'https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30007782/30007782_0_MC/8796348416050_1528879429339.jpg',
    },
    {
      name: 'Patates',
      price: 29.99,
      imageUrl:'https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30062131/30062131_0_MC/8796690579506_1528879550325.jpg',
    },
    {
      name: 'Marul',
      price: 9.99,
      imageUrl:'https://www.aftamarket.com.tr/sebze-21-sebzeler-manav-12411-17-B.jpg',
    },
    {
      name: 'Peynir',
      price: 109.99,
      imageUrl:'https://cdn.shopify.com/s/files/1/0632/6809/4182/products/Olgunlastirilmis-Beyaz-Peynir.png?v=1651770855',
    },
    {
      name: 'Kaşar',
      price: 119.99,
      imageUrl:'https://www.cankurtarangida.com.tr/lokumlu-eski-kasar-tam-yagli-peynirler-32-50-B.jpg',
    },
    {
      name: 'Parmesan',
      price: 229.99,
      imageUrl:'https://mennur.com.tr/wp-content/uploads/2021/06/beyde_0007_PARMESAN-2.jpg',
    },
    {
      name: 'Cheddar',
      price: 189.99,
      imageUrl:'https://cdn.shopify.com/s/files/1/0185/7218/1555/products/RANI_CHEDDAR_ESKI_2048x.jpg?v=1603698632',
    },
    {
      name: 'Et',
      price: 399.99,
      imageUrl:'https://www.mismarsanalmarket.com/UserFiles/Fotograflar/3678-2901045-jpg-2901045.jpg',
    },
    {
      name: 'Bonfile',
      price: 599.99,
      imageUrl:'https://www.seraf.com.tr/dana-bonfile-500-g-dana-et-1780-25-B.jpg',
    },
    {
      name: 'Pirzola',
      price: 229.99,
      imageUrl:'https://www.kentet.com.tr/image/cache/catalog/et-cesitleri/kuzu-pirzola-550x550w.jpg',
    },
    {
      name: 'Sucuk',
      price: 189.99,
      imageUrl:'https://www.kavlak.com.tr/imgs/1080x1080/kavlak-dana-kasap-sucuk.jpg',
    },
  ];

  baskets: BasketModel[] = [];
  total:number = 0;
  @Output() myEvent:EventEmitter<any> = new EventEmitter();



  constructor(
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {}

  addBasket(product:ProductModel){
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-" + product.name)).value);

    (<HTMLInputElement>document.getElementById("quantity-" + product.name)).value = "1"

    this.baskets.push(basketModel);
    //this.total = this.total + (basketModel.quantity * product.price);

    this.myEvent.emit({ data: this.baskets});
    this.toastrService.success(product.name + " sepete başarıyla eklendi");
  }
}
