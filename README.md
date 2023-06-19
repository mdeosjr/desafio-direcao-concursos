
# Desafio Direção Concursos

Este é um desafio técnico [Direção Concursos](https://www.direcaoconcursos.com.br/), que consiste na criação de um player de vídeo.

## Stack utilizada

- Typescript
- React
- Next.js
- Material-UI

## Funcionamento

O projeto consiste em uma página home, que busca os [vídeos populares na API Pexels](https://www.pexels.com/pt-br/api/documentation/#videos-popular).
Ao clicar em um vídeo o usuário é encaminhado para página do vídeo selecionado, onde se encontra o player de vídeo que contem as funcionalidades de barra de progresso do vídeo, play, pause, controle de volume e modo de tela cheia.
Na barra lateral é possível filtrar vídeos de acordo com os botões, que fazem uma busca, também utilizando a [API Pexels](https://www.pexels.com/pt-br/api/documentation/#videos-search).

## Rodando localmente

Clone o projeto
```bash
  git clone https://github.com/mdeosjr/desafio-direcao-concursos
```

Entre no diretório do projeto
```bash
  cd desafio-direcao-concursos
```

Instale as dependências
```bash
  npm install
```

Adicione as variáveis de ambiente
```bash
  API_URL=
  ACCESS_KEY=
```

Inicie o projeto
```bash
  npm run dev

      ou

  yarn dev
```

## Observações

- A API Pexels é extremamente limitada no quis diz respeito às informações do vídeo, tentei deixar abstraído para ser usado qualquer API da preferência da pessoa, para que se faça o mínimo de esforço em modificações no código em si.
