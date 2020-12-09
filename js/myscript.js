var app = new Vue(
  {
    el: '#root',
    data: {
      // CREO INDICE DI PARTENZA ARRAY
     imageIndex: 0,
      // CREO ARRAY
     images: [
       "https://wallpaperaccess.com/full/2043362.jpg",
       "https://images.alphacoders.com/561/thumb-1920-561101.jpg",
       "https://images6.alphacoders.com/542/thumb-1920-542289.jpg",
       "https://a.cdn-hotels.com/gdcs/production178/d1521/a0d859a0-5863-11e8-a5ee-0242ac110030.jpg",
     ]
   },
   methods: {
     // QUANDO PREMO SULLA FRECCIA DESTRA, AUMENTA DI UNO IL MIO INDICE DI UNO
     nextImage: function (){
       this.imageIndex++;
       // SE ARRIVO ALL'ULTIMA FOTO + 1 RIPARTO DALLA PRIMA
       if (this.imageIndex == this.images.length) {
         this.imageIndex = 0;
       }
     },
     // QUANDO PREMO SULLA FRECCIA SINISTRA, DIMINUISCI IL MIO INDICE DI UNO
     prevImage: function (){
       this.imageIndex--
       // SE ARRIVO ALLA PRIMA FOTO -1, RIPARTI DALL'ULTIMA
       if (this.imageIndex == -1) {
         this.imageIndex = this.images.length - 1;
       }
     },
   }
  }
);
