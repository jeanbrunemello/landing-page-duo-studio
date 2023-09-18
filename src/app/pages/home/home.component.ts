import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contatoForm: FormGroup = this.formBuilder.group({
    id: 1,
    nome: ['', [Validators.required, Validators.minLength(3)]],
    telefone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    email: ['', [Validators.required, Validators.email]],
    assunto: ['', [Validators.required]],
    mensagem: ['', [Validators.required, Validators.maxLength(250)]]
  });
  
  constructor(private formBuilder: FormBuilder, private formService: FormServiceService) { }

  res: number = 0
  ngOnInit() {}

  enviarFormulario() {
    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);
      this.formService.enviarFormulario(this.contatoForm.value).subscribe(
        (response) => {

          console.log('Formulário enviado com sucesso!', response);
        },
        (error) => {

          console.error('Erro ao enviar o formulário:', error);
        }
      );
    }
  }
}
