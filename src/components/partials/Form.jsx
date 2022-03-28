import './Form.scss'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <section id="form-container">
      <div id="form-header">
        <h1 className="section-title">Contate-nos</h1>
      </div>
      <form id="form-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-info">
          <div className="contact-info-place">
            <h3 className="contact-info-title">
              Casa das Fechaduras de Niterói
            </h3>
            <h5 className="contact-info-number">Telefone: (XX) XXXX-XXXX</h5>
          </div>
          <div className="contact-info-place">
            <h3 className="contact-info-title">
              Casa das Fechaduras de São Gonçalo
            </h3>
            <h5 className="contact-info-number">Telefone: (XX) XXXX-XXXX</h5>
          </div>
          <div className="contact-info-opening-hours">
            <h3>Horário de funcionamento:</h3>
            <h4>Segunda à sexta : 8h às 18h</h4>
            <h4>Sábado : 9h às 13h</h4>
          </div>
        </div>
        <div className="vertical-line-contact-page"></div>
        <div className="contact-form">
          <input
            type="text"
            placeholder="Nome completo"
            {...register('First name', { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="(XX)XXXXXXXXX"
            {...register('Mobile number', {
              required: true,
              minLength: 6,
              maxLength: 12
            })}
          />
          <select {...register('tipo de comentario', { required: true })}>
            <option value="tipo">Selecione o tipo de comentário</option>
            <option value="Elogio">Elogio</option>
            <option value="Reclamacao">Reclamação</option>
            <option value="Sugestao">Sugestão</option>
            <option value="ComentárioLivre">Comentário Livre</option>
          </select>
          <input
            type="text"
            placeholder="Comentário"
            {...register('Last name', { required: true, maxLength: 100 })}
          />
          <input
            {...register('Cliente?', { required: true })}
            type="radio"
            value="Yes"
          />
          <input
            {...register('Cliente?', { required: true })}
            type="radio"
            value="No"
          />
          <input type="submit" />
        </div>
      </form>
    </section>
  )
}
