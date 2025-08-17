import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  standalone: false,
  templateUrl: './quizz.html',
  styleUrl: './quizz.css'
})
export class Quizz implements OnInit {

  title:string = ""

  questions:any
  questionSelect:any

  answers:string[] = []
  answerSelect:string = ""

  questionIndex:number = 0
  questionMaxIndex:number =0
  

  finished:boolean =  false

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelect = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }

 
  }

  playerChoose(alias: string) {
    console.log("Opção escolhida:", alias);
      this.answers.push(alias)
      this.nextQuestion()
      console.log(this.answers)
    }

    async nextQuestion(){
      this.questionIndex+=1
      if(this.questionMaxIndex > this.questionIndex){
        this.questionSelect = this.questions[this.questionIndex]
      }else{
        const finalAnswer:string = await this.checkResults(this.answers)
        this.finished = true
        this.answerSelect = quizz_questions.results[finalAnswer as keyof
          typeof quizz_questions.results]
        
      }
    }

    async checkResults (answers:string[]){
      const result = answers.reduce((previous,current, i, arr)=>{
        if(
          arr.filter(item => item === previous).length > 
           arr.filter(item => item === current).length  ){
         return previous
        }else{
          return current
        }
      })
      return result
    }
}
