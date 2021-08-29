import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.sass']
})
export class CourseDetailsComponent implements OnInit {
  courseName: string = ""
  title: string = ""
  description: string = ""
  courses = [
    {
      nome: "Design de UX",
      descrição: "O(a) Designer UX (abreviação de User Experience ou “Experiência do Usuário”, em tradução literal) é responsável, como o próprio nome diz, por garantir que o design projetado atenda a todas as necessidades dos usuários, garantindo sua satisfação ao interagir com a empresa, plataformas ou marcas.",
      relacionados: [
        {
          nome: "Design de UX",
          descrição: "O(a) Designer UX (abreviação de User Experience ou “Experiência do Usuário”, em tradução literal) é responsável, como o próprio nome diz, por garantir que o design projetado atenda a todas as necessidades dos usuários, garantindo sua satisfação ao interagir com a empresa, plataformas ou marcas.",
        },
        {
          nome: "Design de Produto",
          descrição: "Design de Produto é a área dos profissionais que projetam bens de consumo, de objetos a serviços, geralmente para indústrias ou empresas prestadoras de serviços. O curso considera todas as características funcionais, físicas, técnicas, estéticas e formais que determinam sua qualidade de uso.",
        },
        {
            nome: "Design UI",
            descrição: "Design de interface de utilizador de utilizador é o desenvolvimento de computadores, aplicações, máquinas, dispositivos de comunicação móveis, softwares e sítios web com o foco na experiência do utilizadores e interação.",
        },
        {
            nome: "Design visual",
            descrição: "Design visual é o design atuando em qualquer mídia ou suporte da comunicação visual. Trata-se de uma terminologia que abrange todas as extensas especializações existentes no design aplicado na comunicação",
        },
        {
            nome: "Design de interação",
            descrição: "Design de interação é uma área do design especializada no projeto de artefatos interativos, como websites, PDAs, jogos eletrônicos e softwares.",
        },
        {
            nome: "Design de Voz",
            descrição: "Design de Voz é uma área do design voltada a voz para fins comunicativos, portanto, o Design da Oralidade componente da Economia da Oralidade. A Oralidade é uma como modalidade do uso da língua, circunscrita no campo da linguista.",
        },
      ]
    }
  ]



  constructor(
    private elem: ElementRef,
    private _route: ActivatedRoute,
  ) { 
    this.courseName = this._route.snapshot.params['course'];
  }

  ngOnInit(): void {
  }

  startsWith(wordToCompare: string) {
    return function(element: any) {
        return element?.nome === wordToCompare;
    }
  }

  showPopUp(word: string) {
    console.log(word);
    let nome = this.elem.nativeElement.querySelectorAll('.modal')[0];
    let value = this.courses[0].relacionados.filter(this.startsWith(word));
   
    this.title = value[0].nome
    this.description = value[0].descrição

    nome.style.display = "block"; 
  }
  
  closePopUp() {
    let nome = this.elem.nativeElement.querySelectorAll('.modal')[0];
    nome.style.display = "none"; 
  }

}
