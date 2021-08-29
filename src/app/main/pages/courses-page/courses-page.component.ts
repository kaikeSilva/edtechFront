import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.sass']
})
export class CoursesPageComponent implements OnInit {

  classe: number = 0;
  showFilters: boolean = false;
  numberOfFilters: number = 0;
  selectedId: string = "criar";
  classes = ["Criar", "Gerir", "Desenvolver"]
  filters: string[] = []
  
  @ViewChild('buttonSearch')
  private button!: ElementRef;
  
  classesCourses = [
    {
      classe: "criar",
      cursos: 
      [
        {
          nome: "Design Produto"
        },
        {
          nome: "Design Web"
        },
        {
          nome: "Design UX"
        },
        {
          nome: "Design UI"
        },
        {
          nome: "Design Industrial"
        },
        {
          nome: "Arquitetura da Informação"
        },
        {
          nome: "Ux Research"
        },
        {
          nome: "Motion Graphic"
        }
      ]
    },
    {
      classe: "gerir",
      cursos: [
        {
          nome: "Gestão de Pessoas"
        },
        {
          nome: "Gestão da Tecnologia da Informação"
        },
        {
          nome: "Gestão de Projetos "
        },
        {
          nome: "Gestão de Processos"
        },
        {
          nome: "Governança de Tecnologia da Informação"
        },
        {
          nome: "Metodologias Ágeis"
        },
        {
          nome: "Gestão de Startup"
        },
        {
          nome: "Gestão da Tecnologia Educacional"
        }
        
      ]
    },
    {
      classe: "desenvolver",
      cursos: [
        {
          nome: "Análise e Desenvolvimento de Sistemas"
        },
        {
          nome: "Jogos Digitais"
        },
        {
          nome: "Sistemas de Informação"
        },
        {
          nome: "Machine Learning e Data Science"
        },
        {
          nome: "Inteligência Artificial"
        },
        {
          nome: "Desenvolvimento móvel"
        },
        {
          nome: "Teste de software"
        },
        {
          nome: "Desenvolvimento Web Full Stack"
        }
      ]
    }
  ]
  constructor(private elem: ElementRef) { }
  
  ngOnInit(): void {
  }
  
  ngAfterContentInit() {
    setTimeout(() => {
      let event = new Event('click')
      this.button.nativeElement.dispatchEvent(event)
    }, 10);
  }
  
  changeClass(value: number) {
    this.classe = value
  }
  
  addFilter(filterValue: string) {
    if (filterValue) {
      this.filters.push(filterValue)
      this.numberOfFilters = this.filters.length
    }
  }
  
  deletarFiltro(filter: string) {
    this.filters = this.filters.filter(item => item != filter);
    this.numberOfFilters = this.filters.length
  }

  toggleShowFilters () {
    this.showFilters = !this.showFilters
  }

  openTab(id: string) {
    var i;
    var x = this.elem.nativeElement.querySelectorAll('.classes');
    var y = document.getElementsByClassName("tab-bar-butons");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      y[i].classList.remove("selected-tab");
    }

    let tab = document.getElementById(id);
    let button = document.getElementById(id.split('-')[0]+"-button"); 
    if (tab) {
      tab.style.display = "block"
      button?.classList.toggle('selected-tab')
    }
  }

}
