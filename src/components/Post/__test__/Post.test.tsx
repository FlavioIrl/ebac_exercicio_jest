import Post from ".."
import { screen, render } from "@testing-library/react"

jest.mock('../PostComments', () => () => <div data-testid="post-comments">Comentários</div>)

const mocks = {
 ImagemMock: "https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg",
 childrenMock: 'Novo post' 
}

describe('Testes para o post', () => {
    test('Deve rendenizar corretamente o post', () => {
        render(<Post imageUrl={mocks.ImagemMock}>{mocks.childrenMock}</Post>)
    
        const imagem = screen.getByTestId('ImagemUrl') 
        const conteudo = screen.getByTestId('ContPost') 

        expect(imagem).toBeInTheDocument()
        expect(imagem).toHaveAttribute('src', mocks.ImagemMock)
        expect(conteudo).toBeInTheDocument()
        expect(conteudo).toHaveTextContent('Novo post')
    }) 
})
 