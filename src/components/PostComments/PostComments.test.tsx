import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

describe('Teste para o Post', () => {
    it('Deve adicionar 2 comentarios', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {value: 'Estudar React'}
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getByTestId('campo-comentario')).toHaveValue('')
        
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {value: 'Estudar Jest'}    
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getByTestId('campo-comentario')).toHaveValue('')

        expect(screen.getByText('Estudar React')).toBeInTheDocument()
        expect(screen.getByText('Estudar Jest')).toBeInTheDocument()
        
    })
})