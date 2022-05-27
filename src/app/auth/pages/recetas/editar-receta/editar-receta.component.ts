import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoApiService } from 'src/app/services/acceso-api.service';
import { CategoriasApiService } from 'src/app/services/categorias-api.service';
import { editarReceta, RecetasApiService } from 'src/app/services/recetas-api.service';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.scss']
})
export class EditarRecetaComponent implements OnInit {
  recetaId=this.router.snapshot.paramMap.get('id')
  datosAntiguos:any=[]

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
  rolUsuario:any=localStorage.getItem('rol')
  idUsuario:any=localStorage.getItem('id')

  public editarReceta:editarReceta={
    titulo:this.datosAntiguos.titulo,
    cuerpo:this.datosAntiguos.cuerpo,
    link:this.datosAntiguos.link,
    categoria:this.datosAntiguos.categoria,
    idCreador:this.datosAntiguos.idCreador,
    ingredientes:this.datosAntiguos.ingredientes,
    descripcion:this.datosAntiguos.descripcion,
    dificultad:this.datosAntiguos.dificultad,
    tiempo:this.datosAntiguos.tiempo,
    comensales:this.datosAntiguos.comensales,
    imagen: this.datosAntiguos.imagen
  }
  constructor(private router:ActivatedRoute, private recetas_api:RecetasApiService,private categorias_api:CategoriasApiService, private router2: Router, private acceso_api:AccesoApiService) { 
    this.obtenerDatos();
    this.obtenerCategorias();
  }

  ngOnInit(): void {
  }
  editarReceta2(){
    this.recetas_api.editarReceta(this.editarReceta,this.recetaId).subscribe(res => {
      console.log(res)
    })

  }

  obtenerDatos(){
    this.recetas_api.getReceraById(this.recetaId).subscribe((res:any) => {
      this.datosAntiguos.push(res);
      console.log(this.datosAntiguos)
    })
  }
  obtenerCategorias(){
    this.categorias_api.obtenerCategorias().subscribe( (res:any) => {
      res.forEach( (cat:any) => {
        this.categorias.push({value:cat.id, text:cat.nombre})
      })

    })
  }

  llevarPerfil(){
    if(this.rolUsuario !=null){
     if(this.rolUsuario === 'ROLE_USER'){
      this.router2.navigateByUrl('auth/perfil',this.idUsuario)
     }else{
      console.log("logueado  y admin")
     }
    }else{
      console.log("No logueado")
    }
  }

  editarPerfil(){
    this.router2.navigateByUrl('perfil/editarPerfil',this.idUsuario)
  }

  llevarNoticias(){
    this.router2.navigateByUrl('auth/noticias')
  }

  llevarRecetas(){ 
    this.router2.navigateByUrl('auth/recetas')
  }
  logOut(){
    this.acceso_api.logOut()
    location.reload();
  }

  llevarLogin(){
    this.router2.navigateByUrl('auth/login')

  }

}
