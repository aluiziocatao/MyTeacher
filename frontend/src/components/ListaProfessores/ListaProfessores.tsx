import { Button } from "@mui/material"
import { FotoStyled, ItemListaStyled, ListaStyled, InformacoesStyled, NomeStyled, ValorStyled, DesricaoStyled } from "./ListaProfessores.style"

const ListaProfessores = () => {
  return (
    <>
      <ListaStyled>
        <ItemListaStyled>
          <FotoStyled src="https://github.com/aluiziocatao.png"></FotoStyled>
          <InformacoesStyled>
            <NomeStyled>Aluízio Catão</NomeStyled>
            <ValorStyled>R$ 100,00 por hora</ValorStyled>
            <DesricaoStyled>Aulas de programação</DesricaoStyled>
            <Button>Marcar Aula</Button>
          </InformacoesStyled>
        </ItemListaStyled>
      </ListaStyled>
    </>
  )
}

export default ListaProfessores