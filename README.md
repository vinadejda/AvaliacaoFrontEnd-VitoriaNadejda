# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Serve para indicar ao navegador que ele pode continuar estruturando o HTML, enquanto o download do script não é finalizado, porém quando finalizado ele será executado.Async serve para carregar o código junto com o documento. Defer é utilizado para carregar o documento após o carregamento do html.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: O parâmetro serve para chamar a função initMap, usada para iniciar o mapa.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Se retirarmos o parâmetro &callback=initMap a função initMap não será executada e com isso o mapa não sera gerado.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Pode-se chamar a função ao final do documento html.

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: A tag link é usada para anexar arquivos externos ao documento html, como por exemplo: arquivos de CSS, JavaScript ou Json. Já as tags meta descrevem o documento e dão informação aos buscadores.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Ela não pode ser considerada uma PWA, pois necessita de internet para carregar o mapa, ou seja, ela não é 'confiável' o usuário não pode usar a aplicação se estiver sem internet.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: O método ngOnInit é executado quando um componente é instanciado como um construtor.
Outros métodos do lifecycle do Angular são: 
  ngOnChanges que é executado quando os dados do componente sofre mudanças 
  ngOnCheck que detecta cada mudança que ocorre em um componente, ele é chamado depois do ngOnChanges 
  ngAfterContentInit chamado quando conteúdo exterior é incluído na view que o componente está 
  ngAfterContentChecked chamado após o conteúdo ser inserido na view da diretiva 
  ngAfterViewInit é chamado após o angular inicializar as view e sub views do componente 
  ngAfterViewChecked chamado depois do angular checar as views e sub views do componente 
  ngOnDestroy chamado antes do angular destruir a diretiva ou componente

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web Components são um conjunto de 5(cinco) tecnologias do HTML5: Templates, Shadow DOM, Custom elements, HTML Imports e Decorators. A vantagem de utilizar é devido a ele ser nativo do navegador é permitido maior portabilidade.

### c) Para que serve a tag ngFor do angular?
R: A tag ngFor é uma diretiva de repetição do Angular similar ao comando for de linguagens de programação comuns.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: Representa um vetor de legendas.

### e) Como funciona a api Events do Ionic? Para que serve?
R: Ela permite registrar eventos que podem ser capturados por outros métodos, por exemplo, o usuário realiza o cadastro, é então criado o evento de que um usuário foi criado e esse evento pode ser capturado por um método para dar as boas vindas.

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: Flexbox é método de layout que distribui o espaço ao longo de uma única coluna ou linha. Ele é dividido em 12 colunas. 
  ion-grid é um elemento que representa a grade para a formação do layout 
  ion-row elemento que representa a linha da grade 
  ion-col elemento que representa as colunas da grade 
A vantagem é que com o seu uso, o layout pode ser adequado a qualquer tamanho de tela.

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R: Logo ao compilar foi possível identificar que LoadingController estava escrito errado, fazendo com que não fosse possível utilizar suas propriedades. Ausência do 'this' para fazer a referência do método dismissLoading(). No arquivo home.module.ts foi comentado o import do FormModule, pois a aplicação não faz uso de formulários. Arquivo home.page.html foi retirado o css presente no elemento de imagem, pois estava repetindo para todas as imagens, e foi acrescento no arquivo home.page.scss o css presente nas imagens. Acréscimo do modificador de acesso private para as variáveis photos e loading. Função randomPhotos sem estar refatorada.

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R: LoadingController escrito errado; ausência de referencia ao método dismissLoading(); função randomPhotos sem estar refatorada; CSS repetido no html; import não utilizados.

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: Os dois primeiros itens causam erro não copilação, o que impede que o usuário possa usar a aplicação. Os outros itens faz com que o desempenho da aplicação seja menor, pois faz com que tenha maior processamento do navegador.

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: O comando async cria um método assíncrono que com o uso do comando await permite o javascript funcionar de modo assíncrono e aguardar a função executar para realizar outras tarefas.

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: A vantagem é garantir que um método dependente de outro aguarde seu término para ser executado.

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R: Lodash serve para melhorar o desempenho da aplicação, fornecendo métodos limpos e eficientes para a manipulação de objeto e coleções.
