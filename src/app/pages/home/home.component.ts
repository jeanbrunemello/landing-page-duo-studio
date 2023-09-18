import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contatoForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    telefone: ['', [Validators.required,Validators.maxLength(11), Validators.maxLength(11)]],
    email: ['', [Validators.required, Validators.email]],
    assunto: ['', [Validators.required]],
    mensagem: ['', [Validators.required, Validators.maxLength(250)]]
  });
  
  constructor(private formBuilder: FormBuilder, private formService: FormServiceService) { }


  ngOnInit() {}

  allowOnlyNumbers(event:KeyboardEvent){
    const codigoTecla = event.keyCode;
    if ((codigoTecla < 48 || codigoTecla > 57) && codigoTecla !== 8) {
      event.preventDefault();
    }
  }

  enviarFormulario() {
    console.log(this.contatoForm.value)
    console.log(this.contatoForm)
    if (this.contatoForm.valid) {
      this.formService.enviarFormulario(this.contatoForm.value).subscribe(
        (response) => {
          this.contatoForm.reset();
          alert("Formulário enviado com sucesso!")
          console.log('Formulário enviado com sucesso!', response);
        },
        (error) => {
          alert('Erro ao enviar o formulário')
          console.error('Erro ao enviar o formulário:', error);
        }
      );
    }
  }
}
