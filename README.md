Para este exercício, iremos criar um cliente para o The Movies Database, uma API gratuita para consulta
de filmes e séries! Para isso, siga os passos abaixo:

Passo 1
Baixe o projeto base no codesandbox: https://codesandbox.io/s/react-movies-app-hkyc4

Passo 2
Após descompactar o projeto, entre na pasta pelo terminal e execute o comando npm install.

Passo 3
Crie uma listagem simples de filmes chamando o método “getPopularMovies” contido no arquivo
MoviesService. Para ver o objeto que a requisição retorna, veja este link:
https://developers.themoviedb.org/3/movies/get-popular-movies

Passo 4
Utilizando a API aberta do The Movies Database, implemente um método no arquivo MoviesService
para buscar um filme pelo seu ID. Consulte a documentação a seguir:
https://developers.themoviedb.org/3/movies/get-movie-details

Passo 5
Crie um componente para cada ítem do filme. Na listagem dos filmes, cada filme deve ser “clicável” e,
ao clicar sobre um filme, o usuário deverá ser redirecionado para uma página com os detalhes do filme,
utilizando para requisição o método criado no Passo 4. Lembre de adicionar o React router conforme a
aula 02.