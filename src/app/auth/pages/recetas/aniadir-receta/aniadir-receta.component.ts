import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasApiService } from 'src/app/services/categorias-api.service';
import { aniadirReceta, RecetasApiService } from 'src/app/services/recetas-api.service';

@Component({
  selector: 'app-aniadir-receta',
  templateUrl: './aniadir-receta.component.html',
  styleUrls: ['./aniadir-receta.component.scss']
})
export class AniadirRecetaComponent implements OnInit {

  categorias:any[]=[];
  ingredientes = ['fettucine', 'mejorana fresca', 'ajo picado', 'aceite de oliva',
   'ajo en polvo', 'huevos grandes', 'salsa Alfredo', 'aceite vegetal', 'condimento cajún', 
   'queso romano rallado', 'hojas secas de albahaca', 'sal', 'pimienta de cayena', 'cebolletas',
    'pimiento rojo', 'mitades de pechuga de pollo sin piel y sin hueso', "soba", "salsa para pasta",
    "sal kosher", "leche", "jengibre fresco", "pimienta negra molida", "harina", "pollo cocido",
    "sal gruesa", "limón", "tomates en dados", "ajo", "vinagre de arroz", "Neufchâtel", "dientes de ajo",
    "perejil seco", "corazones de alcachofa congelados", "penne", "pimienta", "cebolla dulce", 
    "queso mozzarella semidesnatado", "queso parmigiano reggiano", "hojas de albahaca", "cebolla en polvo", 
    "vinagre de vino tinto", "copos de pimiento rojo", "orzo", "pimiento rojo triturado", "harina para todo",
    "pimienta recién molida", "champiñones cortados", "pan rallado panko", "tomates ciruela", "albahaca fresca",
    "espinacas frescas", "agua", "tomates secos", "pimienta molida", "queso parmesano rallado",
    "pechugas de pollo deshuesadas sin piel", "chuletas de pollo", "mantequilla",
    "pasta penne multicereales", "aceite de oliva virgen extra", "hojas de cilantro",
    "pimiento verde", "queso mozzarella rallado", "perejil fresco", "espaguetis"]
  
  dificultadSelectOpt=[
    {value:'facil',text:'Fácil'},
    {value:'intermedio',text:'Intermedio'},
    {value:'dificil',text:'Difícil'}
  ]
  tiempoSelectOpt=[
    {value:1,text:'1'},
    {value:2,text:'2'},
    {value:3,text:'3'},
    {value:4,text:'4'},
    {value:5,text:'5'},
    {value:6,text:'6'},
    {value:7,text:'7'},
    {value:8,text:'8'},
    {value:9,text:'9'},
    {value:10,text:'10'},
    {value:11,text:'11'}
  ]
  comensalesSelectOpt=[
    {value:1,text:'1'},
    {value:2,text:'2'},
    {value:3,text:'3'},
    {value:4,text:'4'},
    {value:5,text:'5'},
    {value:6,text:'6'},
    {value:7,text:'7'},
    {value:8,text:'8'},
    {value:9,text:'9'},
    {value:10,text:'10'}
  ]

  categoriasSelectOpt=[]

  public aniadirReceta:aniadirReceta = {
    titulo:'',
    cuerpo:'',
    link:'',
    categoria:0,
    idCreador:3,
    ingredientes:[],
    descripcion:'',
    dificultad:'',
    tiempo:0,
    comensales:0,
    imagen : undefined
  }
  constructor(private recetas_api:RecetasApiService,private router: Router,private categorias_api:CategoriasApiService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

   obtenerCategorias(){
    this.categorias_api.obtenerCategorias().subscribe( (res:any) => {
      res.forEach( (cat:any) => {
        this.categorias.push({value:cat.id, text:cat.nombre})
      })

    })
  }
  addReceta(){
    console.log(this.aniadirReceta)
    this.recetas_api.addReceta(this.aniadirReceta)
  }
}
