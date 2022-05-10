# Movie Parse
- Desafio para vaga de Back-end Júnior na MobApps 
- Segui esse [planejamento](https://scientific-iridium-246.notion.site/Planejamento-para-teste-t-cnico-da-MobApps-por-dia-c563c16a4b9a4a54a4b326ab71ae2267) para realização do teste técnico. 

## Rodando localmente 

Clone o repositório e vá até o diretório.

Preencha o .env de acordo com o .env-example

Instale o mongodb-runner.

Em seguida
```text 
mongodb-runner
npm i 
npm run dev
```
Pode utilizar a documentação abaixo para fazer requisições e utilizar testes prontos.

## Testes automatizados e exemplos de requisições
Pode-se utilizar o botão "Run in Postman" dentro da documentação abaixo, para fazer as requisições na API local através da web e ver os casos de testes propostos.
- [Documentação](https://documenter.getpostman.com/view/16085223/Uyxeoo71#5156661d-a551-4915-9ea8-4d0fd1deb99e)

Ou carregar os arquivos postman no seu postman local.
- [positive_test](./docs/positive_tests.json) - testes que funcionam no fluxo normal do programa, sem erros, como por exemplo, criar uma conta corretamente, logar nela, postar filme com o token correto, etc
- [Collection](./docs/Test_Mobapps.postman_collection.json) - documentação completa para poder mudar as requisições e encontrar os diferentes resultados de teste.