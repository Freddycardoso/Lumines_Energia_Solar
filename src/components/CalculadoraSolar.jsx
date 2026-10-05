import React, { useState } from 'react';

export default function CalculadoraSolar() {
  const [contaMensal, setContaMensal] = useState(800);
  const [tipoImovel, setTipoImovel] = useState('comercial');

  const economiaMensalEstimada = Math.max(0, contaMensal * 0.90);
  const economiaAnualEstimada = economiaMensalEstimada * 12;
  const investimentoEstimado = contaMensal * 28;
  const paybackAnos = (investimentoEstimado / economiaAnualEstimada).toFixed(1);

  const mensagemWhatsApp = encodeURIComponent(
    `Olá! Fiz uma simulação no site da Lumines:\n- Perfil: ${tipoImovel}\n- Fatura Média: R$ ${contaMensal}\n- Economia Estimada: R$ ${economiaMensalEstimada.toFixed(2)}/mês.\nGostaria de solicitar um estudo de engenharia formal.`
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] p-6 sm:p-10 border border-slate-100 shadow-2xl text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <label className="block text-sm font-semibold tracking-wider uppercase text-orange-500 mb-2">
            Tipo de Estrutura
          </label>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {['residencial', 'comercial', 'rural'].map((tipo) => (
              <button
                key={tipo}
                type="button"
                onClick={() => setTipoImovel(tipo)}
                className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg capitalize premium-press ${
                  tipoImovel === tipo
                    ? 'bg-orange-500 text-white shadow-md font-bold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>

          <label className="block text-sm font-semibold tracking-wider uppercase text-slate-600 mb-2">
            Valor Médio da Fatura Mensal (R$)
          </label>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="range"
              min="250"
              max="15000"
              step="50"
              value={contaMensal}
              onChange={(e) => setContaMensal(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 border border-slate-300"
            />
            <span className="text-xl font-bold font-mono text-orange-500 whitespace-nowrap">
              R$ {contaMensal.toLocaleString('pt-BR')}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Estimativa calculada considerando compensação de energia conforme marco regulatório vigente.
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Economia Estimada em 1 Ano
            </span>
            <div className="text-3xl sm:text-4xl font-black text-orange-500 font-mono mb-4">
              R$ {economiaAnualEstimada.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-4 mb-6">
              <div>
                <span className="text-xs text-slate-500 block">Retorno Estimado</span>
                <span className="text-lg font-bold text-slate-900">~ {paybackAnos} anos</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Proteção Tarifária</span>
                <span className="text-lg font-bold text-slate-900">25 anos</span>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/5535999765975?text=${mensagemWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center premium-interactive shadow-lg flex items-center justify-center gap-2"
          >
            <span>Validar Projeto com Engenharia</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
